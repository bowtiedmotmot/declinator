import { useState, useCallback, useEffect } from 'react';
import type { Chart, ChartAttempt } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './ChartDrill.css';

/**
 * Props for the ChartDrill component
 */
interface ChartDrillProps {
  onProgressUpdate?: (attempt: ChartAttempt) => void;
}

/**
 * Represents a user's answer and grading status for a single cell
 */
interface GradedCell {
  rowIndex: number;
  colIndex: number;
  rowLabel: string;
  colLabel: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

/**
 * Normalize a Latin answer by lowercasing and removing/standardizing macrons
 * Accepts both macronated (e.g., "amō") and ASCII (e.g., "amo") versions
 */
function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .trim()
    .replace(/ā/g, 'a')
    .replace(/ē/g, 'e')
    .replace(/ī/g, 'i')
    .replace(/ō/g, 'o')
    .replace(/ū/g, 'u');
}

/**
 * ChartDrill: Interactive Latin grammar drill component
 * Allows users to fill in blank cells in a conjugation or declension chart
 * and provides immediate feedback on correctness.
 */
export function ChartDrill({ onProgressUpdate }: ChartDrillProps) {
  const [charts, setCharts] = useState<Chart[]>([]);
  const [selectedChartId, setSelectedChartId] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [gradedCells, setGradedCells] = useState<GradedCell[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attempts, setAttempts] = useLocalStorage<Record<string, ChartAttempt[]>>(
    'chartAttempts',
    {}
  );

  // Load charts on mount
  useEffect(() => {
    (async () => {
      const { charts: loadedCharts } = await import('../data/charts');
      setCharts(loadedCharts);
      if (loadedCharts.length > 0) {
        setSelectedChartId(loadedCharts[0].id);
      }
    })();
  }, []);

  const selectedChart = charts.find((c) => c.id === selectedChartId);

  const handleChartChange = (chartId: string) => {
    setSelectedChartId(chartId);
    setUserAnswers({});
    setGradedCells([]);
    setIsSubmitted(false);
  };

  const handleAnswerChange = (key: string, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = useCallback(() => {
    if (!selectedChart) return;

    const graded: GradedCell[] = [];
    let correctCount = 0;

    selectedChart.rows.forEach((rowLabel, rowIndex) => {
      selectedChart.cols.forEach((colLabel, colIndex) => {
        const key = `row_${rowIndex}_col_${colIndex}`;
        const userAnswer = userAnswers[key] || '';
        const correctAnswer = selectedChart.answers[key] || '';

        const isCorrect =
          normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);

        if (isCorrect) {
          correctCount++;
        }

        graded.push({
          rowIndex,
          colIndex,
          rowLabel,
          colLabel,
          userAnswer,
          correctAnswer,
          isCorrect,
        });
      });
    });

    setGradedCells(graded);
    setIsSubmitted(true);

    // Record the attempt in localStorage
    const attempt: ChartAttempt = {
      chartId: selectedChart.id,
      correctCount,
      totalCount: graded.length,
      lastAttempted: new Date().toISOString(),
    };

    setAttempts((prev) => {
      const chartAttempts = prev[selectedChart.id] || [];
      return {
        ...prev,
        [selectedChart.id]: [...chartAttempts, attempt],
      };
    });

    // Notify parent if callback provided
    if (onProgressUpdate) {
      onProgressUpdate(attempt);
    }
  }, [selectedChart, userAnswers, onProgressUpdate, setAttempts]);

  const handleReset = () => {
    setUserAnswers({});
    setGradedCells([]);
    setIsSubmitted(false);
  };

  if (!selectedChart) {
    return (
      <div className="chart-drill">
        <p>Loading charts...</p>
      </div>
    );
  }

  return (
    <div className="chart-drill">
      {/* Chart Selector */}
      <div className="chart-selector-container">
        <label htmlFor="chart-select">Select a chart to drill:</label>
        <select
          id="chart-select"
          value={selectedChartId}
          onChange={(e) => handleChartChange(e.target.value)}
          disabled={isSubmitted}
          className="chart-select"
        >
          {charts.map((chart) => (
            <option key={chart.id} value={chart.id}>
              {chart.name}
            </option>
          ))}
        </select>
      </div>

      {/* Chart Info */}
      <div className="chart-info">
        <h3>{selectedChart.name}</h3>
        <p>{selectedChart.description}</p>
      </div>

      {/* Chart Table */}
      <div className="chart-table-container">
        <table className="chart-table">
          <thead>
            <tr>
              <th className="row-header-cell"></th>
              {selectedChart.cols.map((col) => (
                <th key={col} className="col-header">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedChart.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th className="row-header">{row}</th>
                {selectedChart.cols.map((col, colIndex) => {
                  const key = `row_${rowIndex}_col_${colIndex}`;
                  const graded = gradedCells.find(
                    (g) => g.rowIndex === rowIndex && g.colIndex === colIndex
                  );
                  let cellClass = 'chart-cell';
                  if (isSubmitted && graded) {
                    cellClass += graded.isCorrect ? ' cell-correct' : ' cell-incorrect';
                  }

                  return (
                    <td key={key} className={cellClass}>
                      <input
                        type="text"
                        value={userAnswers[key] || ''}
                        onChange={(e) => handleAnswerChange(key, e.target.value)}
                        disabled={isSubmitted}
                        placeholder="–"
                        aria-label={`${row} ${col}`}
                        className="chart-input"
                      />
                      {isSubmitted && graded && !graded.isCorrect && (
                        <div className="answer-hint">{graded.correctAnswer}</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit/Reset Buttons */}
      <div className="button-group">
        {!isSubmitted ? (
          <button onClick={handleSubmit} className="btn btn-submit">
            Submit
          </button>
        ) : (
          <>
            <button onClick={handleReset} className="btn btn-try-again">
              Try Again
            </button>
            <button onClick={() => handleReset()} className="btn btn-pick-another">
              Pick Another Chart
            </button>
          </>
        )}
      </div>

      {/* Summary */}
      {isSubmitted && (
        <div className="summary-section">
          <div className="summary-header">
            <h3>Results</h3>
            <p className="summary-score">
              {gradedCells.filter((g) => g.isCorrect).length} of {gradedCells.length} correct
            </p>
          </div>

          {gradedCells.every((g) => g.isCorrect) ? (
            <div className="congratulations">
              Excellent work! You got them all correct!
            </div>
          ) : (
            <div className="mistakes-list">
              <h4>Mistakes:</h4>
              <ul>
                {gradedCells
                  .filter((g) => !g.isCorrect)
                  .map((g, idx) => (
                    <li key={idx}>
                      <strong>
                        {g.rowLabel} {g.colLabel}
                      </strong>
                      : You wrote <em>{g.userAnswer || '(empty)'}</em> — correct answer:{' '}
                      <strong>{g.correctAnswer}</strong>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
