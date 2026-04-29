/**
 * Vocabulary words data
 * 20 common 8th-grade Latin words covering nouns, verbs, adjectives, and other parts of speech
 */

import type { VocabWord } from '../types';

/**
 * A curated collection of high-frequency Latin vocabulary suitable for 8th-grade students.
 * Includes verbs with principal parts, nouns with gender/declension notes, and adjectives.
 */
export const vocab: VocabWord[] = [
  // Verbs
  {
    id: 'amo',
    latin: 'amō',
    english: 'I love, I like',
    partOfSpeech: 'verb',
    principalParts: ['amō', 'amāre', 'amāvī', 'amātum'],
    chapter: 1,
    notes: '1st conjugation, regular. Root: am-',
  },
  {
    id: 'video',
    latin: 'videō',
    english: 'I see, I understand',
    partOfSpeech: 'verb',
    principalParts: ['videō', 'vidēre', 'vīdī', 'vīsum'],
    chapter: 2,
    notes: '2nd conjugation, regular',
  },
  {
    id: 'sum',
    latin: 'sum',
    english: 'I am',
    partOfSpeech: 'verb',
    principalParts: ['sum', 'esse', 'fuī', 'futūrum'],
    chapter: 1,
    notes: 'irregular verb, extremely common',
  },
  {
    id: 'dico',
    latin: 'dīcō',
    english: 'I say, I tell, I speak',
    partOfSpeech: 'verb',
    principalParts: ['dīcō', 'dīcere', 'dīxī', 'dictum'],
    chapter: 3,
    notes: '3rd conjugation, regular',
  },
  {
    id: 'do',
    latin: 'dō',
    english: 'I give',
    partOfSpeech: 'verb',
    principalParts: ['dō', 'dare', 'dedī', 'datum'],
    chapter: 1,
    notes: '1st conjugation, regular. Short vowel despite -ō ending',
  },
  {
    id: 'venio',
    latin: 'veniō',
    english: 'I come',
    partOfSpeech: 'verb',
    principalParts: ['veniō', 'venīre', 'vēnī', 'ventum'],
    chapter: 3,
    notes: '4th conjugation, regular',
  },
  {
    id: 'facio',
    latin: 'faciō',
    english: 'I make, I do',
    partOfSpeech: 'verb',
    principalParts: ['faciō', 'facere', 'fēcī', 'factum'],
    chapter: 3,
    notes: '3rd conjugation -iō variant (semi-deponent)',
  },
  {
    id: 'habeo',
    latin: 'habeō',
    english: 'I have, I hold',
    partOfSpeech: 'verb',
    principalParts: ['habeō', 'habēre', 'habuī', 'habitum'],
    chapter: 2,
    notes: '2nd conjugation, regular',
  },
  // Nouns
  {
    id: 'puella',
    latin: 'puella',
    english: 'girl',
    partOfSpeech: 'noun',
    chapter: 1,
    notes: '1st declension, feminine (nom. puella, gen. puellae)',
  },
  {
    id: 'puer',
    latin: 'puer',
    english: 'boy',
    partOfSpeech: 'noun',
    chapter: 1,
    notes: '2nd declension, masculine (nom. puer, gen. puerī)',
  },
  {
    id: 'servus',
    latin: 'servus',
    english: 'slave, servant',
    partOfSpeech: 'noun',
    chapter: 2,
    notes: '2nd declension, masculine (nom. servus, gen. servī)',
  },
  {
    id: 'rex',
    latin: 'rex',
    english: 'king',
    partOfSpeech: 'noun',
    chapter: 2,
    notes: '3rd declension, masculine (nom. rex, gen. rēgis)',
  },
  {
    id: 'via',
    latin: 'via',
    english: 'road, way, street',
    partOfSpeech: 'noun',
    chapter: 1,
    notes: '1st declension, feminine (nom. via, gen. viae)',
  },
  {
    id: 'aqua',
    latin: 'aqua',
    english: 'water',
    partOfSpeech: 'noun',
    chapter: 1,
    notes: '1st declension, feminine (nom. aqua, gen. aquae)',
  },
  // Adjectives
  {
    id: 'magnus',
    latin: 'magnus',
    english: 'great, large, big',
    partOfSpeech: 'adjective',
    chapter: 1,
    notes: '1st/2nd declension (magnus, magna, magnum)',
  },
  {
    id: 'bonus',
    latin: 'bonus',
    english: 'good',
    partOfSpeech: 'adjective',
    chapter: 1,
    notes: '1st/2nd declension (bonus, bona, bonum)',
  },
  {
    id: 'malus',
    latin: 'malus',
    english: 'bad, evil',
    partOfSpeech: 'adjective',
    chapter: 2,
    notes: '1st/2nd declension (malus, mala, malum)',
  },
  // Other parts of speech
  {
    id: 'et',
    latin: 'et',
    english: 'and',
    partOfSpeech: 'conjunction',
    chapter: 1,
    notes: 'Common conjunction, connects words and clauses',
  },
  {
    id: 'in',
    latin: 'in',
    english: 'in, into, on',
    partOfSpeech: 'preposition',
    chapter: 1,
    notes: 'Takes accusative (into) or ablative (in/on). Very common.',
  },
  {
    id: 'sed',
    latin: 'sed',
    english: 'but',
    partOfSpeech: 'conjunction',
    chapter: 2,
    notes: 'Adversative conjunction, always used with nominative + verb',
  },
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
