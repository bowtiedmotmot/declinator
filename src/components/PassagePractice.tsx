import React, { useState, useMemo } from 'react';
import type { Passage } from '../types';
import { passages } from '../data/passages';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './PassagePractice.css';

interface PassagePracticeProps {
  /** Initial passage scores from shared app state */
  passageScores: Record<string, number>;
  /** Called when a passage is completed with its score */
  onScoreUpdate: (passageId: string, score: number) => void;
}

interface AnswerState {
  [questionId: string]: number | undefined;
}

/**
 * WordTooltip: A sub-component that renders a word with a hover tooltip
 * showing its English definition from the passage vocabulary.
 */
interface WordTooltipProps {
  word: string;
  definition?: string;
}

function WordTooltip({ word, definition }: WordTooltipProps) {
  const tooltipContent = definition ? (
    <span className="word-tooltip-content">{definition}</span>
  ) : null;

  return (
    <span className="word-with-tooltip" title={definition}>
      {word}
      {tooltipContent}
    </span>
  );
}

/**
 * PassagePractice: Main component for reading comprehension practice.
 * Displays a selectable passage, its text with vocabulary tooltips,
 * and multiple-choice comprehension questions with scoring.
 */
export function PassagePractice({
  passageScores,
  onScoreUpdate
}: PassagePracticeProps) {
  // Passage selection
  const [selectedPassageId, setSelectedPassageId] = useState(passages[0]?.id || '');
  const currentPassage = useMemo(
    () => passages.find((p) => p.id === selectedPassageId),
    [selectedPassageId]
  );

  // Answer tracking for current passage
  const [answers, setAnswers] = useState<AnswerState>({});

  // localStorage for persistence
  const [savedScores, setSavedScores] = useLocalStorage<Record<string, number>>(
    'passage-scores',
    passageScores
  );

  // Update local scores when prop changes
  React.useEffect(() => {
    setSavedScores(passageScores);
  }, [passageScores, setSavedScores]);

  if (!currentPassage) {
    return (
      <div className="passage-practice">
        <p className="error-message">No passages available. Please check the data.</p>
      </div>
    );
  }

  // Calculate score for current passage
  const correctCount = useMemo(() => {
    return currentPassage.questions.filter((q) => {
      const selectedIndex = answers[q.id];
      return selectedIndex !== undefined && selectedIndex === q.correctIndex;
    }).length;
  }, [answers, currentPassage.questions]);

  const allQuestionsAnswered = currentPassage.questions.every(
    (q) => answers[q.id] !== undefined
  );

  // Handle answer selection
  const handleAnswerSelect = (questionId: string, choiceIndex: number) => {
    // Only allow changing answer if not already submitted
    if (answers[questionId] === undefined) {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: choiceIndex
      }));
    }
  };

  // Handle completion and score update
  const handleComplete = () => {
    const percentage = Math.round((correctCount / currentPassage.questions.length) * 100);
    setSavedScores((prev) => ({
      ...prev,
      [currentPassage.id]: percentage
    }));
    onScoreUpdate(currentPassage.id, percentage);
  };

  // Handle passage selection change
  const handlePassageChange = (passageId: string) => {
    setSelectedPassageId(passageId);
    setAnswers({});
  };

  // Build vocabulary lookup map for fast access
  const vocabMap = useMemo(() => {
    const map = new Map<string, string>();
    currentPassage.vocabulary.forEach((word) => {
      map.set(word.latin.toLowerCase(), word.english);
    });
    return map;
  }, [currentPassage.vocabulary]);

  // Tokenize passage text and create word spans with tooltips
  const renderPassageText = () => {
    const words = currentPassage.latin.split(/(\s+)/);
    return words.map((token, index) => {
      // Preserve whitespace
      if (/^\s+$/.test(token)) {
        return (
          <span key={`space-${index}`}>
            {token}
          </span>
        );
      }

      // Extract actual word (strip punctuation for lookup)
      const wordWithoutPunctuation = token.replace(/[.,;:!?'—–-]+$/g, '');
      const definition = vocabMap.get(wordWithoutPunctuation.toLowerCase());

      return (
        <WordTooltip
          key={`word-${index}`}
          word={token}
          definition={definition}
        />
      );
    });
  };

  const currentScore = savedScores[currentPassage.id] ?? null;
  const showScoreSummary = allQuestionsAnswered && currentScore !== null;

  return (
    <div className="passage-practice">
      {/* Passage Selector */}
      <div className="passage-selector">
        <label htmlFor="passage-select" className="passage-label">
          Select a Passage:
        </label>
        <select
          id="passage-select"
          className="passage-dropdown"
          value={selectedPassageId}
          onChange={(e) => handlePassageChange(e.target.value)}
        >
          {passages.map((passage) => (
            <option key={passage.id} value={passage.id}>
              {passage.title}
              {currentScore !== null ? ` (${currentScore}%)` : ''}
            </option>
          ))}
        </select>
      </div>

      {/* Passage Display */}
      <div className="passage-card">
        <h2 className="passage-title">{currentPassage.title}</h2>
        {currentPassage.source && (
          <p className="passage-source">Source: {currentPassage.source}</p>
        )}
        {currentPassage.difficulty && (
          <p className="passage-difficulty">
            Difficulty: <span className="difficulty-badge">{currentPassage.difficulty}</span>
          </p>
        )}

        <div className="passage-text">
          {renderPassageText()}
        </div>

        {currentPassage.sentences.length > 0 && (
          <details className="passage-translations">
            <summary>Show Sentence-by-Sentence Translation</summary>
            <div className="translation-list">
              {currentPassage.sentences.map((sentence, idx) => (
                <div key={idx} className="sentence-pair">
                  <div className="sentence-latin">
                    <strong>Latin:</strong> {sentence.latin}
                  </div>
                  <div className="sentence-english">
                    <strong>English:</strong> {sentence.english}
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>

      {/* Comprehension Questions */}
      <div className="questions-section">
        <h3 className="questions-title">Comprehension Questions</h3>

        {currentPassage.questions.map((question) => {
          const selectedIndex = answers[question.id];
          const isAnswered = selectedIndex !== undefined;
          const isCorrect = isAnswered && selectedIndex === question.correctIndex;

          return (
            <div key={question.id} className="question-card">
              <h4 className="question-text">{question.prompt}</h4>

              <div className="choices-group">
                {question.choices.map((choice, choiceIndex) => {
                  const isSelected = selectedIndex === choiceIndex;
                  const showAsCorrect = isAnswered && choiceIndex === question.correctIndex;
                  const showAsWrong = isAnswered && isSelected && !isCorrect;

                  const choiceClassName = [
                    'choice-button',
                    isSelected && 'selected',
                    showAsCorrect && 'correct',
                    showAsWrong && 'incorrect'
                  ]
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <button
                      key={choiceIndex}
                      className={choiceClassName}
                      onClick={() => handleAnswerSelect(question.id, choiceIndex)}
                      disabled={isAnswered}
                      aria-pressed={isSelected}
                    >
                      <span className="choice-label">{choice}</span>
                      {showAsCorrect && <span className="choice-indicator">✓</span>}
                      {showAsWrong && <span className="choice-indicator">✗</span>}
                    </button>
                  );
                })}
              </div>

              {isAnswered && question.explanation && (
                <div className="question-explanation">
                  <strong>Explanation:</strong> {question.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Score Summary */}
      {showScoreSummary && (
        <div className="score-summary">
          <h3>Score Summary</h3>
          <div className="score-display">
            <div className="score-large">{correctCount}/{currentPassage.questions.length}</div>
            <div className="score-percentage">{currentScore}%</div>
          </div>

          <p className="score-message">
            {currentScore === 100
              ? '🎉 Excellent! Perfect score!'
              : currentScore >= 80
                ? '✓ Great job! You understand well.'
                : currentScore >= 60
                  ? 'Good effort. Keep practicing!'
                  : 'Keep working. You\'ll improve!'}
          </p>

          <button
            className="next-passage-button"
            onClick={() => {
              const currentIndex = passages.findIndex(
                (p) => p.id === currentPassage.id
              );
              const nextIndex = (currentIndex + 1) % passages.length;
              handlePassageChange(passages[nextIndex].id);
            }}
          >
            Try Next Passage
          </button>

          <button
            className="reset-button"
            onClick={() => {
              setAnswers({});
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default PassagePractice;
