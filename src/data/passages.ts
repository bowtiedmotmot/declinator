/**
 * Latin passages for reading comprehension
 * To be populated by the team with actual Latin texts
 */

import type { Passage } from '../types';

/**
 * Sample passage structure for demonstration.
 * Future passages will follow this interface.
 */
export const passages: Passage[] = [
  // Passages will be added here
];

export function getPassageById(id: string): Passage | undefined {
  return passages.find((passage) => passage.id === id);
}

export function getPassagesByDifficulty(
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): Passage[] {
  return passages.filter((passage) => passage.difficulty === difficulty);
}

export function searchPassages(query: string): Passage[] {
  const lowerQuery = query.toLowerCase();
  return passages.filter(
    (passage) =>
      passage.title.toLowerCase().includes(lowerQuery) ||
      passage.source?.toLowerCase().includes(lowerQuery)
  );
}
