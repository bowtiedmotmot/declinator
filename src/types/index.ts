/**
 * Declinator shared TypeScript types
 * Used across ChartDrill, VocabDrill, and PassagePractice features
 */

// ─── Part of Speech ───────────────────────────────────────────────────────────

/** Parts of speech in Latin */
export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'pronoun'
  | 'interjection';

// ─── Vocabulary ───────────────────────────────────────────────────────────────

/**
 * A single Latin vocabulary word with optional principal parts
 * (used for verbs) and grammatical metadata.
 */
export interface VocabWord {
  /** Unique identifier */
  id: string;
  /** Latin word or phrase as it appears in the dictionary */
  latin: string;
  /** English translation or meaning */
  english: string;
  /** Part of speech (noun, verb, adjective, etc.) */
  partOfSpeech: PartOfSpeech;
  /** Optional: Principal parts (1st, 2nd, 3rd, 4th) if the word is a verb */
  principalParts?: [string, string, string, string];
  /** Optional: Chapter or unit this word belongs to */
  chapter?: number;
  /** Optional: Notes or memory aids */
  notes?: string;
}

// ─── Charts (Conjugation/Declension) ───────────────────────────────────────────

/**
 * A single cell in a conjugation or declension chart.
 * Contains both singular and plural forms (or similar pair).
 */
export interface ChartCell {
  /** Singular or primary form */
  primary: string;
  /** Plural or secondary form (if applicable) */
  secondary?: string;
}

/**
 * A conjugation or declension chart for drilling conjugations and declensions.
 * Rows represent persons/cases, columns represent tenses/numbers.
 */
export interface Chart {
  /** Unique identifier */
  id: string;
  /** Name of the chart (e.g., "amō (1st conjugation present)") */
  name: string;
  /** Description of what is being drilled */
  description: string;
  /** Row headers (e.g., ["1st sing.", "2nd sing.", "3rd sing.", ...]) */
  rows: string[];
  /** Column headers (e.g., ["singular", "plural"] or ["present", "imperfect", ...]) */
  cols: string[];
  /**
   * The correct answers organized as a 2D grid.
   * Key format: `row_${rowIndex}_col_${colIndex}` (e.g., "row_0_col_0")
   */
  answers: Record<string, string>;
}

/**
 * Record of a user's attempt at a chart drill.
 * Tracks how many correct/total answers and when it was last attempted.
 */
export interface ChartAttempt {
  /** The chart ID that was attempted */
  chartId: string;
  /** Number of correct answers */
  correctCount: number;
  /** Total number of cells in the chart */
  totalCount: number;
  /** ISO 8601 timestamp of the last attempt */
  lastAttempted: string;
}

// ─── Passage Reading & Comprehension ───────────────────────────────────────────

/**
 * A single sentence or clause in a passage with its English translation.
 */
export interface PassageSentence {
  /** The Latin text */
  latin: string;
  /** The English translation */
  english: string;
}

/**
 * A multiple-choice question about a passage.
 */
export interface Question {
  /** Unique identifier for the question */
  id: string;
  /** The question prompt in English */
  prompt: string;
  /** Multiple choice options */
  choices: string[];
  /** 0-based index of the correct answer in choices[] */
  correctIndex: number;
  /** Optional: Explanation of why the answer is correct */
  explanation?: string;
}

/**
 * A Latin passage for reading comprehension practice.
 * Contains the text, sentences, vocabulary, and comprehension questions.
 */
export interface Passage {
  /** Unique identifier */
  id: string;
  /** Title of the passage (e.g., "The Meeting of Cicero and Catiline") */
  title: string;
  /** The full Latin text of the passage */
  latin: string;
  /** Breakdown of the passage into sentences with translations */
  sentences: PassageSentence[];
  /** Comprehension questions about the passage */
  questions: Question[];
  /** Vocabulary words featured in this passage */
  vocabulary: VocabWord[];
  /** Optional: English translation of the entire passage */
  englishTranslation?: string;
  /** Optional: Author or source of the passage */
  source?: string;
  /** Optional: Difficulty level for the passage */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

// ─── User Progress ────────────────────────────────────────────────────────────

/**
 * Overall user progress data.
 * Tracks mastered vocabulary, chart attempt history, and passage scores.
 */
export interface AppProgress {
  /** Set of vocabulary word IDs the user has mastered */
  masteredVocabIds: Set<string>;
  /** History of all chart drill attempts indexed by chartId */
  chartAttempts: Record<string, ChartAttempt[]>;
  /** User's best score (0-100) for each passage indexed by passageId */
  passageScores: Record<string, number>;
}
