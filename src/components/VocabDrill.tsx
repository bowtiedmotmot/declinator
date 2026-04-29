import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { vocab } from '../data/vocab';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { VocabWord } from '../types';
import './VocabDrill.css';

interface VocabDrillProps {
  masteredIds: string[];
  onMasteryChange: (id: string, mastered: boolean) => void;
}

type DrillMode = 'latin-to-english' | 'english-to-latin';
type FeedbackType = 'none' | 'correct' | 'incorrect';

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * VocabDrill component: A two-mode flashcard vocabulary drill with progress tracking.
 *
 * Modes:
 * - Latin→English: Show Latin word, user types English translation
 * - English→Latin: Show English meaning, user types Latin word
 *
 * Features:
 * - Tracks mastered words (3 correct in a row = mastered)
 * - Progress bar showing mastery count
 * - Filter to show only "needs work" words
 * - Shuffled card order
 * - localStorage persistence via useLocalStorage hook
 */
export function VocabDrill({ masteredIds, onMasteryChange }: VocabDrillProps) {
  // UI mode toggle
  const [mode, setMode] = useState<DrillMode>('latin-to-english');
  const [showNeedsWork, setShowNeedsWork] = useState(false);

  // User answer and feedback
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<FeedbackType>('none');
  const [revealed, setRevealed] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  // Mastery tracking: word id -> correct streak count
  const [mastery, setMastery] = useLocalStorage<Record<string, number>>(
    'vocabdrill-mastery',
    {}
  );

  // Active deck state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deck, setDeck] = useState<VocabWord[]>([]);

  // Determine which words to show
  const activeVocab = useMemo(() => {
    if (showNeedsWork) {
      return vocab.filter((word) => {
        const streak = mastery[word.id] ?? 0;
        return streak < 3; // Not yet mastered
      });
    }
    return vocab;
  }, [showNeedsWork, mastery]);

  // Shuffle deck when active vocab changes
  useEffect(() => {
    const shuffled = shuffleArray(activeVocab);
    setDeck(shuffled);
    setCurrentIndex(0);
    setUserAnswer('');
    setFeedback('none');
    setRevealed(false);
  }, [activeVocab]);

  const currentWord: VocabWord | undefined = deck[currentIndex];

  // Count mastered words
  const masteredCount = useMemo(() => {
    return vocab.filter((word) => (mastery[word.id] ?? 0) >= 3).length;
  }, [mastery]);

  // Handle answer submission
  const handleSubmit = useCallback(() => {
    if (!currentWord) return;

    const userTrimmed = userAnswer.trim().toLowerCase();
    let isCorrect = false;
    let correctStr = '';

    if (mode === 'latin-to-english') {
      // User should type English translation
      correctStr = currentWord.english.toLowerCase();
      isCorrect = userTrimmed === correctStr;
    } else {
      // User should type Latin
      correctStr = currentWord.latin.toLowerCase();
      isCorrect = userTrimmed === correctStr;
    }

    if (isCorrect) {
      setFeedback('correct');
      const newStreak = (mastery[currentWord.id] ?? 0) + 1;
      setMastery((prev) => ({
        ...prev,
        [currentWord.id]: newStreak,
      }));

      // If word just became mastered
      if (newStreak === 3) {
        onMasteryChange(currentWord.id, true);
      }

      // Auto-advance after delay
      setTimeout(() => {
        handleNext();
      }, 800);
    } else {
      setFeedback('incorrect');
      setCorrectAnswer(correctStr);
      // Reset streak on incorrect
      setMastery((prev) => ({
        ...prev,
        [currentWord.id]: 0,
      }));
    }
  }, [currentWord, userAnswer, mode, mastery, setMastery, onMasteryChange]);

  // Handle moving to next card
  const handleNext = useCallback(() => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Wrap around
    }
    setUserAnswer('');
    setFeedback('none');
    setRevealed(false);
    setCorrectAnswer('');
  }, [currentIndex, deck.length]);

  // Handle moving to previous card
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(deck.length - 1); // Wrap around
    }
    setUserAnswer('');
    setFeedback('none');
    setRevealed(false);
    setCorrectAnswer('');
  }, [currentIndex, deck.length]);

  // Reset all progress
  const handleReset = useCallback(() => {
    if (
      window.confirm(
        'Are you sure you want to reset all progress? This cannot be undone.'
      )
    ) {
      setMastery({});
      vocab.forEach((word) => onMasteryChange(word.id, false));
      setUserAnswer('');
      setFeedback('none');
      setRevealed(false);
      setCurrentIndex(0);
    }
  }, [setMastery, onMasteryChange]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !revealed) {
        handleSubmit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSubmit, revealed]);

  // Empty state
  if (deck.length === 0) {
    return (
      <div className="vocab-drill">
        <div className="vocab-drill-header">
          <h3>Vocabulary Drills</h3>
          <div className="vocab-mode-toggle">
            <label htmlFor="mode-select">Mode:</label>
            <select
              id="mode-select"
              value={mode}
              onChange={(e) => setMode(e.target.value as DrillMode)}
              className="vocab-select"
            >
              <option value="latin-to-english">Latin → English</option>
              <option value="english-to-latin">English → Latin</option>
            </select>
          </div>
        </div>

        <div className="vocab-progress-section">
          <div className="vocab-progress-text">
            <strong>{masteredCount}</strong> of <strong>{vocab.length}</strong> words mastered
          </div>
          <div className="vocab-progress-bar">
            <div
              className="vocab-progress-fill"
              style={{
                width: `${(masteredCount / vocab.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="vocab-filter-section">
          <label htmlFor="needs-work-toggle" className="vocab-filter-label">
            <input
              id="needs-work-toggle"
              type="checkbox"
              checked={showNeedsWork}
              onChange={(e) => setShowNeedsWork(e.target.checked)}
              disabled={masteredCount === vocab.length}
              className="vocab-checkbox"
            />
            Show only needs work
          </label>
        </div>

        <div className="vocab-empty-state">
          {masteredCount === vocab.length ? (
            <>
              <p className="vocab-celebration">🎉 All words mastered!</p>
              <button onClick={handleReset} className="vocab-btn vocab-btn-reset">
                Reset All Progress
              </button>
            </>
          ) : (
            <p className="vocab-empty-msg">All filtered cards are mastered! Continue with the full deck.</p>
          )}
        </div>
      </div>
    );
  }

  const progress = currentIndex + 1;
  const total = deck.length;

  return (
    <div className="vocab-drill">
      {/* Header with mode toggle */}
      <div className="vocab-drill-header">
        <h3>Vocabulary Drills</h3>
        <div className="vocab-mode-toggle">
          <label htmlFor="mode-select">Mode:</label>
          <select
            id="mode-select"
            value={mode}
            onChange={(e) => setMode(e.target.value as DrillMode)}
            className="vocab-select"
          >
            <option value="latin-to-english">Latin → English</option>
            <option value="english-to-latin">English → Latin</option>
          </select>
        </div>
      </div>

      {/* Progress bar */}
      <div className="vocab-progress-section">
        <div className="vocab-progress-text">
          <strong>{masteredCount}</strong> of <strong>{vocab.length}</strong> words mastered
        </div>
        <div className="vocab-progress-bar">
          <div
            className="vocab-progress-fill"
            style={{
              width: `${(masteredCount / vocab.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Filter section */}
      <div className="vocab-filter-section">
        <label htmlFor="needs-work-toggle" className="vocab-filter-label">
          <input
            id="needs-work-toggle"
            type="checkbox"
            checked={showNeedsWork}
            onChange={(e) => setShowNeedsWork(e.target.checked)}
            disabled={masteredCount === vocab.length}
            className="vocab-checkbox"
          />
          Show only needs work
        </label>
      </div>

      {/* Card counter */}
      <div className="vocab-counter">
        Card {progress} of {total}
      </div>

      {/* Flashcard */}
      <div className="vocab-card">
        <div className="vocab-card-front">
          {mode === 'latin-to-english' ? (
            <>
              <div className="vocab-card-primary">{currentWord.latin}</div>
              {currentWord.principalParts && (
                <div className="vocab-card-principal-parts">
                  {currentWord.principalParts.join(', ')}
                </div>
              )}
            </>
          ) : (
            <div className="vocab-card-primary">{currentWord.english}</div>
          )}
        </div>

        {/* Input and feedback */}
        {!revealed ? (
          <div className="vocab-input-section">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder={
                mode === 'latin-to-english'
                  ? 'Type the English translation...'
                  : 'Type the Latin word...'
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }}
              className="vocab-input"
              autoFocus
              disabled={feedback !== 'none'}
            />
            <button
              onClick={handleSubmit}
              disabled={!userAnswer.trim() || feedback !== 'none'}
              className="vocab-btn vocab-btn-submit"
            >
              Check
            </button>
          </div>
        ) : null}

        {/* Feedback display */}
        {feedback === 'correct' && (
          <div className="vocab-feedback vocab-feedback-correct">
            <span>✓ Correct!</span>
          </div>
        )}

        {feedback === 'incorrect' && (
          <div className="vocab-feedback vocab-feedback-incorrect">
            <span>✗ Incorrect</span>
            <div className="vocab-correct-answer">Correct answer: <strong>{correctAnswer}</strong></div>
            <button onClick={handleNext} className="vocab-btn vocab-btn-next">
              Next Card
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="vocab-nav">
        <button onClick={handlePrev} className="vocab-btn vocab-btn-nav">
          ← Previous
        </button>
        <button onClick={handleNext} className="vocab-btn vocab-btn-nav">
          Next →
        </button>
        <button onClick={handleReset} className="vocab-btn vocab-btn-reset">
          Reset Progress
        </button>
      </div>
    </div>
  );
}

export default VocabDrill;
