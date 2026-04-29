---
name: Declinator Project Structure & Architecture
description: Folder structure, type definitions, and architectural patterns for the Latin learning app
type: project
---

## Project Setup
- **Build Tool**: Vite (v8.0.10) with React + TypeScript
- **Node Version**: Uses standard npm/node stack
- **Scripts**:
  - `npm run dev` — Start development server (port 3000)
  - `npm run build` — Build production bundle (runs tsc then vite build)
  - `npm run preview` — Preview production build
  - `npm run type-check` — Run TypeScript type checker without emitting

## Folder Structure

```
src/
├── components/         (empty, reserved for ChartDrill, VocabDrill, PassagePractice)
├── data/              (placeholder data files)
│   ├── charts.ts      (conjugation/declension chart data)
│   ├── vocab.ts       (vocabulary words)
│   └── passages.ts    (reading passages)
├── hooks/             (custom React hooks)
│   └── useLocalStorage.ts (generic localStorage hook)
├── types/
│   └── index.ts       (all shared TypeScript types)
├── App.tsx            (main app with tab-based navigation)
├── App.css            (styling for App component)
├── index.css          (global base styles)
├── main.tsx           (React entry point)
└── vite-env.d.ts      (Vite type definitions)
```

## Key Type Definitions (src/types/index.ts)

All types exported from `src/types/index.ts`:

1. **VocabWord** — A Latin vocabulary word with optional principal parts for verbs
2. **Chart** — Conjugation/declension drill structure with rows, cols, and answers grid
3. **ChartAttempt** — User's attempt record for a chart
4. **PassageSentence** — Single sentence in a passage with Latin + English
5. **Question** — Multiple choice comprehension question
6. **Passage** — Reading passage with sentences, questions, vocabulary
7. **AppProgress** — Overall user progress (mastered vocab, chart attempts, passage scores)
8. **PartOfSpeech** — Union type for Latin parts of speech

## Component Architecture

**App.tsx**: Main component with three tabs via `useState`:
- "Chart Drills" — placeholder for ChartDrill component
- "Vocab" — placeholder for VocabDrill component
- "Passages" — placeholder for PassagePractice component

Navigation tabs are styled with active state styling and smooth transitions.

## Styling
- **App.css**: Component-specific styles (header, nav, tabs, placeholder content)
- **index.css**: Global base styles (typography, buttons, links, accessibility)
- **Design principles**:
  - Large, readable font sizes for teen learners (1rem baseline)
  - Blue accent color (#3498db) with dark header (#2c3e50)
  - Responsive design: desktop → tablet → mobile
  - Focus-visible outlines for accessibility
  - Smooth transitions and animations (respects prefers-reduced-motion)

## Hook: useLocalStorage

Generic hook for reading/writing to localStorage with automatic JSON serialization.
- Signature: `useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void]`
- Handles errors gracefully with console logging
- Returns both current value and setter function (similar to useState)

## Data Files (Placeholders)

Each data file exports:
- Array of entities (charts, vocab, passages)
- Helper functions: `getById()`, query functions
- Ready to be populated by future development

## TypeScript Configuration

- **Target**: ES2020
- **Module**: ESNext
- **Strict mode**: Enabled
- **CSS imports**: Enabled via vite-env.d.ts
- **Unused variable checking**: Disabled (allows partial implementations)

## How to Extend

When implementing feature components:
1. Create component files in `src/components/`
2. Import types from `src/types/index.ts`
3. Populate data files (`charts.ts`, `vocab.ts`, `passages.ts`)
4. Add component to appropriate tab in `App.tsx`
5. Create styles in component-specific CSS files or CSS modules

## Tech Stack Summary
- **React 19.2.5** with TypeScript strict mode
- **Vite 8** for fast development and optimized builds
- **No external UI libraries** — all custom styles for educational clarity
