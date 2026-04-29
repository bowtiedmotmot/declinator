/**
 * Vocabulary words data
 * To be populated by the team with actual Latin vocabulary
 */

import type { VocabWord } from '../types';

/**
 * Sample vocabulary structure for demonstration.
 * Future vocabulary will follow this interface.
 */
export const vocab: VocabWord[] = [
  // Vocabulary words will be added here
];

export function getVocabById(id: string): VocabWord | undefined {
  return vocab.find((word) => word.id === id);
}

export function getVocabByChapter(chapter: number): VocabWord[] {
  return vocab.filter((word) => word.chapter === chapter);
}

export function searchVocab(query: string): VocabWord[] {
  const lowerQuery = query.toLowerCase();
  return vocab.filter(
    (word) =>
      word.latin.toLowerCase().includes(lowerQuery) ||
      word.english.toLowerCase().includes(lowerQuery)
  );
}
