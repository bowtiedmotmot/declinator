import { useState } from 'react';
import './App.css';

type Tab = 'Chart Drills' | 'Vocab' | 'Passages';

const TABS: Tab[] = ['Chart Drills', 'Vocab', 'Passages'];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Chart Drills');

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Declinator</h1>
        <p className="app-subtitle">Master Latin Conjugations, Declensions & Reading</p>

        <nav className="app-nav">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`nav-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              aria-current={activeTab === tab ? 'page' : undefined}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'Chart Drills' && (
          <section className="tab-content">
            <h2>Chart Drills</h2>
            <p>
              Practice Latin verb conjugations and noun declensions with interactive charts.
              Select a chart and fill in the blanks to drill your conjugation and declension skills.
            </p>
            <div className="placeholder-box">
              <p>Chart Drill component will be loaded here.</p>
            </div>
          </section>
        )}

        {activeTab === 'Vocab' && (
          <section className="tab-content">
            <h2>Vocabulary Drills</h2>
            <p>
              Build your Latin vocabulary with flashcards. Learn new words, test yourself,
              and track your progress.
            </p>
            <div className="placeholder-box">
              <p>Vocab Drill component will be loaded here.</p>
            </div>
          </section>
        )}

        {activeTab === 'Passages' && (
          <section className="tab-content">
            <h2>Passage Reading</h2>
            <p>
              Read authentic Latin passages and answer comprehension questions.
              Build your reading skills with guided practice.
            </p>
            <div className="placeholder-box">
              <p>Passage Practice component will be loaded here.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
