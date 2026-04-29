# Declinator

Declinator is a Latin language learning app built for students who want to master the fundamentals of Latin grammar. It covers the three pillars of Latin study — conjugation and declension chart drills, vocabulary flashcards, and reading comprehension passages — in a single fast, offline-capable progressive web app. All progress is saved automatically in the browser using localStorage, so students can pick up exactly where they left off.

## Features

### Chart Drills
Fill-in-the-blank conjugation and declension tables for Latin verbs and nouns. Select a chart (e.g., first conjugation present active, second declension masculine), type your answers, and submit to see instant feedback. Macrons are optional — both `amo` and `amō` are accepted. Each attempt is recorded so the dashboard can show how many charts you have practiced today.

### Vocabulary Drill
A two-mode flashcard system covering 20 high-frequency Latin words. Switch between Latin-to-English and English-to-Latin modes. Answer correctly three times in a row to mark a word as mastered. A progress bar and "show only needs work" filter keep the session focused. All mastery state survives page refresh.

### Passage Practice
Read beginner Latin passages with vocabulary tooltips (hover any word to see its meaning), reveal sentence-by-sentence translations, and answer multiple-choice comprehension questions. Scores are saved per passage and shown on the dashboard.

### Dashboard
A home screen summarizing your progress at a glance: charts practiced today, vocab words mastered, and passages completed. Quick-start buttons let you jump directly into any mode.

### Dark Mode
Toggle between light and dark themes with one click. The preference is persisted to localStorage so it survives refresh.

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 |
| Language | TypeScript 6 |
| Build tool | Vite 8 |
| Styling | Plain CSS with CSS custom properties |
| Persistence | Browser localStorage via custom `useLocalStorage` hook |
| Routing | State-based tab switching (no router library) |

## How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
src/
  components/
    ChartDrill.tsx      # Fill-in-blank conjugation/declension tables
    VocabDrill.tsx      # Flashcard vocabulary drill
    PassagePractice.tsx # Latin reading comprehension
  data/
    charts.ts           # Conjugation & declension chart definitions
    vocab.ts            # 20 Latin vocabulary words
    passages.ts         # 3 beginner Latin reading passages
  hooks/
    useLocalStorage.ts  # Generic localStorage state hook
  types/
    index.ts            # Shared TypeScript types for the whole app
  App.tsx               # App shell: tab nav, dashboard, shared state
  App.css               # Shell styles, dark mode tokens, dashboard cards
  index.css             # Global resets, dark mode body overrides
```

## Screenshot

_(screenshot placeholder — run `npm run dev` to see the app in action)_
