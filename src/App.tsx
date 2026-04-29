import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ChartDrill } from './components/ChartDrill';
import { VocabDrill } from './components/VocabDrill';
import PassagePractice from './components/PassagePractice';
import { passages } from './data/passages';
import { vocab } from './data/vocab';
import type { ChartAttempt } from './types';
import './App.css';

/** The four top-level tabs in the app */
type Tab = 'home' | 'charts' | 'vocab' | 'passages';

/**
 * Get today's date as a YYYY-MM-DD string in local time.
 * Used to filter chart attempts recorded today.
 */
function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** Count chart attempts whose lastAttempted timestamp falls on today's date */
function countAttemptsToday(
  chartAttempts: Record<string, ChartAttempt[]>
): number {
  const today = getTodayString();
  let count = 0;
  for (const attempts of Object.values(chartAttempts)) {
    for (const attempt of attempts) {
      if (attempt.lastAttempted.startsWith(today)) {
        count++;
      }
    }
  }
  return count;
}

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  // Dark mode — persisted to localStorage
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('declinator-dark-mode', false);

  // Shared mastered vocab IDs — VocabDrill reads and writes streaks internally,
  // but App owns which IDs count as "mastered" (streak >= 3)
  const [masteredVocabIds, setMasteredVocabIds] = useLocalStorage<string[]>(
    'declinator-mastered-vocab',
    []
  );

  // Passage scores shared between App (dashboard) and PassagePractice
  const [passageScores, setPassageScores] = useLocalStorage<Record<string, number>>(
    'passage-scores',
    {}
  );

  // Chart attempts — ChartDrill writes to this key internally.
  // App mirrors the same key read-only for the dashboard stat.
  const [chartAttempts] = useLocalStorage<Record<string, ChartAttempt[]>>(
    'chartAttempts',
    {}
  );

  // Handlers passed down to child components
  const handleVocabMasteryChange = (id: string, mastered: boolean) => {
    setMasteredVocabIds((prev) => {
      if (mastered) {
        return prev.includes(id) ? prev : [...prev, id];
      }
      return prev.filter((vocabId) => vocabId !== id);
    });
  };

  const handlePassageScoreUpdate = (passageId: string, score: number) => {
    setPassageScores((prev) => ({ ...prev, [passageId]: score }));
  };

  // Dashboard computed stats
  const chartsTodayCount = countAttemptsToday(chartAttempts);
  const masteredVocabCount = masteredVocabIds.length;
  const passagesCompletedCount = passages.filter(
    (p) => (passageScores[p.id] ?? 0) > 0
  ).length;

  // Apply dark mode class to the root element
  const rootClass = `app${darkMode ? ' dark-mode' : ''}`;

  return (
    <div className={rootClass}>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">Declinator</h1>
          <span className="app-subtitle">Latin made learnable</span>
        </div>

        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀ Light' : '☽ Dark'}
        </button>
      </header>

      {/* ── Tab Navigation ─────────────────────────────────────────────────── */}
      <nav className="app-nav" aria-label="Main navigation">
        {(
          [
            { id: 'home', label: 'Home' },
            { id: 'charts', label: 'Chart Drills' },
            { id: 'vocab', label: 'Vocab' },
            { id: 'passages', label: 'Passages' },
          ] as { id: Tab; label: string }[]
        ).map(({ id, label }) => (
          <button
            key={id}
            className={`nav-button${activeTab === id ? ' active' : ''}`}
            onClick={() => setActiveTab(id)}
            aria-current={activeTab === id ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* ── Main Content ───────────────────────────────────────────────────── */}
      <main className="app-main">

        {/* Home / Dashboard */}
        {activeTab === 'home' && (
          <section className="tab-content dashboard">
            <div className="dashboard-welcome">
              <h2>Welcome to Declinator</h2>
              <p>
                Your personal Latin practice companion. Drill conjugations and
                declensions, master vocabulary, and practice reading real Latin
                passages — all in one place.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="stat-cards">
              <div className="stat-card stat-card--charts">
                <div className="stat-card__icon" aria-hidden="true">📋</div>
                <div className="stat-card__number">{chartsTodayCount}</div>
                <div className="stat-card__label">Charts Practiced Today</div>
              </div>

              <div className="stat-card stat-card--vocab">
                <div className="stat-card__icon" aria-hidden="true">⭐</div>
                <div className="stat-card__number">{masteredVocabCount}</div>
                <div className="stat-card__label">
                  Vocab Mastered
                  <span className="stat-card__sub">of {vocab.length} words</span>
                </div>
              </div>

              <div className="stat-card stat-card--passages">
                <div className="stat-card__icon" aria-hidden="true">📖</div>
                <div className="stat-card__number">{passagesCompletedCount}</div>
                <div className="stat-card__label">
                  Passages Completed
                  <span className="stat-card__sub">of {passages.length} passages</span>
                </div>
              </div>
            </div>

            {/* Quick-Start Buttons */}
            <div className="quickstart-section">
              <h3 className="quickstart-heading">Jump right in</h3>
              <div className="quickstart-buttons">
                <button
                  className="quickstart-btn quickstart-btn--charts"
                  onClick={() => setActiveTab('charts')}
                >
                  <span className="quickstart-btn__icon" aria-hidden="true">📋</span>
                  <span className="quickstart-btn__text">
                    <strong>Chart Drills</strong>
                    <span>Fill-in conjugation &amp; declension tables</span>
                  </span>
                </button>

                <button
                  className="quickstart-btn quickstart-btn--vocab"
                  onClick={() => setActiveTab('vocab')}
                >
                  <span className="quickstart-btn__icon" aria-hidden="true">⭐</span>
                  <span className="quickstart-btn__text">
                    <strong>Vocabulary</strong>
                    <span>Flashcard drill with mastery tracking</span>
                  </span>
                </button>

                <button
                  className="quickstart-btn quickstart-btn--passages"
                  onClick={() => setActiveTab('passages')}
                >
                  <span className="quickstart-btn__icon" aria-hidden="true">📖</span>
                  <span className="quickstart-btn__text">
                    <strong>Passages</strong>
                    <span>Read Latin texts &amp; answer questions</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Chart Drills */}
        {activeTab === 'charts' && (
          <section className="tab-content">
            <div className="tab-header">
              <h2>Chart Drills</h2>
              <p>
                Practice Latin verb conjugations and noun declensions with
                interactive fill-in-the-blank tables. Macrons are optional —
                both <em>amo</em> and <em>amō</em> are accepted.
              </p>
            </div>
            <ChartDrill />
          </section>
        )}

        {/* Vocab */}
        {activeTab === 'vocab' && (
          <section className="tab-content">
            <VocabDrill
              masteredIds={masteredVocabIds}
              onMasteryChange={handleVocabMasteryChange}
            />
          </section>
        )}

        {/* Passages */}
        {activeTab === 'passages' && (
          <section className="tab-content">
            <PassagePractice
              passageScores={passageScores}
              onScoreUpdate={handlePassageScoreUpdate}
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
