/**
 * Latin passages for reading comprehension
 * Beginner-level passages for reading practice
 */

import type { Passage } from '../types';

/**
 * Collection of Latin passages for reading comprehension practice.
 * Each passage includes the Latin text, English translations,
 * comprehension questions, and vocabulary support.
 */
export const passages: Passage[] = [
  {
    id: 'passage-1-marcus-roma',
    title: 'Marcus in Roma',
    latin:
      'Marcus est filius agricolae. Habitatōrēs in agris labōrant. Mārcus quoque labōrat et multas hōrās in villā studet. Pater eius est vir bonus et magnus. Mārcus patrem amat et auxilium dat.',
    sentences: [
      {
        latin: 'Marcus est filius agricolae.',
        english: 'Marcus is the son of a farmer.'
      },
      {
        latin: 'Habitatōrēs in agris labōrant.',
        english: 'The inhabitants work in the fields.'
      },
      {
        latin: 'Mārcus quoque labōrat et multas hōrās in villā studet.',
        english: 'Marcus also works and studies for many hours in the farmhouse.'
      },
      {
        latin: 'Pater eius est vir bonus et magnus.',
        english: 'His father is a good and great man.'
      },
      {
        latin: 'Mārcus patrem amat et auxilium dat.',
        english: 'Marcus loves his father and gives help.'
      }
    ],
    questions: [
      {
        id: 'q1-marcus-1',
        prompt: 'Who is Marcus?',
        choices: [
          'A farmer',
          'The son of a farmer',
          'A teacher',
          'A soldier'
        ],
        correctIndex: 1,
        explanation: 'The first sentence states "Marcus est filius agricolae" — Marcus is the son of a farmer.'
      },
      {
        id: 'q1-marcus-2',
        prompt: 'Where do the inhabitants work?',
        choices: [
          'In the city',
          'In the market',
          'In the fields',
          'In the sea'
        ],
        correctIndex: 2,
        explanation: 'The passage says "Habitatōrēs in agris labōrant" — inhabitants work in the fields.'
      },
      {
        id: 'q1-marcus-3',
        prompt: 'What kind of person is Marcus\'s father?',
        choices: [
          'Small and bad',
          'Good and great',
          'Young and poor',
          'Old and tired'
        ],
        correctIndex: 1,
        explanation: 'The passage describes the father as "vir bonus et magnus" — a good and great man.'
      },
      {
        id: 'q1-marcus-4',
        prompt: 'What does Marcus do besides work?',
        choices: [
          'He hunts',
          'He travels',
          'He studies in the farmhouse',
          'He fights'
        ],
        correctIndex: 2,
        explanation: 'The passage states "multas hōrās in villā studet" — he studies for many hours in the farmhouse.'
      }
    ],
    vocabulary: [
      {
        id: 'vocab-marcus-1',
        latin: 'Marcus',
        english: 'Marcus (a name)',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-2',
        latin: 'est',
        english: 'is',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-marcus-3',
        latin: 'filius',
        english: 'son',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-4',
        latin: 'agricola',
        english: 'farmer',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-5',
        latin: 'habitator',
        english: 'inhabitant, resident',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-6',
        latin: 'in',
        english: 'in, on (with ablative)',
        partOfSpeech: 'preposition'
      },
      {
        id: 'vocab-marcus-7',
        latin: 'ager',
        english: 'field',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-8',
        latin: 'laboro',
        english: 'I work, I labor',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-marcus-9',
        latin: 'quoque',
        english: 'also, too',
        partOfSpeech: 'adverb'
      },
      {
        id: 'vocab-marcus-10',
        latin: 'multus',
        english: 'much, many',
        partOfSpeech: 'adjective'
      },
      {
        id: 'vocab-marcus-11',
        latin: 'hora',
        english: 'hour',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-12',
        latin: 'villa',
        english: 'farmhouse, country house',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-13',
        latin: 'studeo',
        english: 'I study',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-marcus-14',
        latin: 'pater',
        english: 'father',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-15',
        latin: 'hic',
        english: 'this, he',
        partOfSpeech: 'pronoun'
      },
      {
        id: 'vocab-marcus-16',
        latin: 'vir',
        english: 'man',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-17',
        latin: 'bonus',
        english: 'good',
        partOfSpeech: 'adjective'
      },
      {
        id: 'vocab-marcus-18',
        latin: 'magnus',
        english: 'great, large, big',
        partOfSpeech: 'adjective'
      },
      {
        id: 'vocab-marcus-19',
        latin: 'amo',
        english: 'I love, I like',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-marcus-20',
        latin: 'auxilium',
        english: 'help, aid',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-marcus-21',
        latin: 'do',
        english: 'I give',
        partOfSpeech: 'verb'
      }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-2-puella-rosa',
    title: 'Puella et Rosa',
    latin:
      'Puella pulchra est et in villā habitat. Rosa est flos magnum et pulcher. Puella rosam amat quia flos est bonus. Quotidie aquam dat florī. Amici puellae veniunt et rosam vident. Omnes rosam laudant.',
    sentences: [
      {
        latin: 'Puella pulchra est et in villā habitat.',
        english: 'The girl is beautiful and lives in a house.'
      },
      {
        latin: 'Rosa est flos magnum et pulcher.',
        english: 'The rose is a large and beautiful flower.'
      },
      {
        latin: 'Puella rosam amat quia flos est bonus.',
        english: 'The girl loves the rose because the flower is good.'
      },
      {
        latin: 'Quotidie aquam dat florī.',
        english: 'Every day she gives water to the flower.'
      },
      {
        latin: 'Amici puellae veniunt et rosam vident.',
        english: 'The girl\'s friends come and see the rose.'
      },
      {
        latin: 'Omnes rosam laudant.',
        english: 'Everyone praises the rose.'
      }
    ],
    questions: [
      {
        id: 'q2-rosa-1',
        prompt: 'What is the girl like?',
        choices: [
          'Ugly and sad',
          'Beautiful and happy',
          'Beautiful and lives in a house',
          'Young and strong'
        ],
        correctIndex: 2,
        explanation: 'The passage states "Puella pulchra est et in villā habitat" — the girl is beautiful and lives in a house.'
      },
      {
        id: 'q2-rosa-2',
        prompt: 'Why does the girl love the rose?',
        choices: [
          'Because it is red',
          'Because it is expensive',
          'Because the flower is good',
          'Because her mother gave it to her'
        ],
        correctIndex: 2,
        explanation: 'The passage says "quia flos est bonus" — because the flower is good.'
      },
      {
        id: 'q2-rosa-3',
        prompt: 'What does the girl do every day?',
        choices: [
          'She picks the flower',
          'She gives water to the flower',
          'She plays in the garden',
          'She reads a book'
        ],
        correctIndex: 1,
        explanation: 'The passage states "Quotidie aquam dat florī" — every day she gives water to the flower.'
      },
      {
        id: 'q2-rosa-4',
        prompt: 'What do the girl\'s friends do when they come?',
        choices: [
          'They play games',
          'They pick flowers',
          'They see the rose and praise it',
          'They bring gifts'
        ],
        correctIndex: 2,
        explanation: 'The passage says "Amici puellae veniunt et rosam vident" and "Omnes rosam laudant" — the friends come and see the rose, and everyone praises it.'
      },
      {
        id: 'q2-rosa-5',
        prompt: 'What kind of flower is the rose?',
        choices: [
          'Small and ugly',
          'Large and beautiful',
          'Old and dead',
          'Common and ordinary'
        ],
        correctIndex: 1,
        explanation: 'The passage describes the rose as "flos magnum et pulcher" — a large and beautiful flower.'
      }
    ],
    vocabulary: [
      {
        id: 'vocab-rosa-1',
        latin: 'puella',
        english: 'girl',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-rosa-2',
        latin: 'pulcher',
        english: 'beautiful, pretty',
        partOfSpeech: 'adjective'
      },
      {
        id: 'vocab-rosa-3',
        latin: 'rosa',
        english: 'rose',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-rosa-4',
        latin: 'flos',
        english: 'flower',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-rosa-5',
        latin: 'quia',
        english: 'because',
        partOfSpeech: 'conjunction'
      },
      {
        id: 'vocab-rosa-6',
        latin: 'aqua',
        english: 'water',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-rosa-7',
        latin: 'quotidie',
        english: 'every day, daily',
        partOfSpeech: 'adverb'
      },
      {
        id: 'vocab-rosa-8',
        latin: 'amicus',
        english: 'friend',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-rosa-9',
        latin: 'venio',
        english: 'I come',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-rosa-10',
        latin: 'video',
        english: 'I see',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-rosa-11',
        latin: 'omnes',
        english: 'all, everyone',
        partOfSpeech: 'pronoun'
      },
      {
        id: 'vocab-rosa-12',
        latin: 'laudo',
        english: 'I praise',
        partOfSpeech: 'verb'
      }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-3-faber-lupus',
    title: 'Faber et Lupus',
    latin:
      'In silvā venit faber. Faber artem amat et multa facit. Lupus in silvis habitat et magnum est. Lupus fabrum videt et timet. Faber lupum non timet sed aquam offert. Lupus aquam bibit et amicus fit. Nunc faber et lupus boni amici sunt.',
    sentences: [
      {
        latin: 'In silvā venit faber.',
        english: 'A craftsman comes into the forest.'
      },
      {
        latin: 'Faber artem amat et multa facit.',
        english: 'The craftsman loves his craft and makes many things.'
      },
      {
        latin: 'Lupus in silvis habitat et magnum est.',
        english: 'The wolf lives in the forests and is large.'
      },
      {
        latin: 'Lupus fabrum videt et timet.',
        english: 'The wolf sees the craftsman and is afraid.'
      },
      {
        latin: 'Faber lupum non timet sed aquam offert.',
        english: 'The craftsman does not fear the wolf but offers water.'
      },
      {
        latin: 'Lupus aquam bibit et amicus fit.',
        english: 'The wolf drinks the water and becomes a friend.'
      },
      {
        latin: 'Nunc faber et lupus boni amici sunt.',
        english: 'Now the craftsman and the wolf are good friends.'
      }
    ],
    questions: [
      {
        id: 'q3-lupus-1',
        prompt: 'Where does the story take place?',
        choices: [
          'In a city',
          'In a forest',
          'In a house',
          'By the sea'
        ],
        correctIndex: 1,
        explanation: 'The passage begins "In silvā venit faber" — a craftsman comes into the forest.'
      },
      {
        id: 'q3-lupus-2',
        prompt: 'What is the craftsman like?',
        choices: [
          'He is lazy',
          'He loves his craft and makes many things',
          'He is afraid of animals',
          'He is rich and proud'
        ],
        correctIndex: 1,
        explanation: 'The passage states "Faber artem amat et multa facit" — the craftsman loves his craft and makes many things.'
      },
      {
        id: 'q3-lupus-3',
        prompt: 'What is the wolf\'s first reaction to the craftsman?',
        choices: [
          'He is happy',
          'He attacks',
          'He is afraid',
          'He runs away'
        ],
        correctIndex: 2,
        explanation: 'The passage says "Lupus fabrum videt et timet" — the wolf sees the craftsman and is afraid.'
      },
      {
        id: 'q3-lupus-4',
        prompt: 'How does the craftsman respond to the wolf\'s fear?',
        choices: [
          'He runs away',
          'He attacks the wolf',
          'He does not fear the wolf but offers water',
          'He calls for help'
        ],
        correctIndex: 2,
        explanation: 'The passage states "Faber lupum non timet sed aquam offert" — the craftsman does not fear the wolf but offers water.'
      },
      {
        id: 'q3-lupus-5',
        prompt: 'What is the final outcome?',
        choices: [
          'The wolf kills the craftsman',
          'They become good friends',
          'The craftsman leaves the forest',
          'They ignore each other'
        ],
        correctIndex: 1,
        explanation: 'The passage ends "Nunc faber et lupus boni amici sunt" — now the craftsman and the wolf are good friends.'
      }
    ],
    vocabulary: [
      {
        id: 'vocab-lupus-1',
        latin: 'silva',
        english: 'forest, wood',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-lupus-2',
        latin: 'faber',
        english: 'craftsman, maker, artisan',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-lupus-3',
        latin: 'ars',
        english: 'art, craft, skill',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-lupus-4',
        latin: 'multus',
        english: 'much, many',
        partOfSpeech: 'adjective'
      },
      {
        id: 'vocab-lupus-5',
        latin: 'facio',
        english: 'I make, I do',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-lupus-6',
        latin: 'lupus',
        english: 'wolf',
        partOfSpeech: 'noun'
      },
      {
        id: 'vocab-lupus-7',
        latin: 'habito',
        english: 'I live, I dwell',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-lupus-8',
        latin: 'timeo',
        english: 'I fear, I am afraid of',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-lupus-9',
        latin: 'non',
        english: 'not',
        partOfSpeech: 'adverb'
      },
      {
        id: 'vocab-lupus-10',
        latin: 'sed',
        english: 'but',
        partOfSpeech: 'conjunction'
      },
      {
        id: 'vocab-lupus-11',
        latin: 'offero',
        english: 'I offer, I present',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-lupus-12',
        latin: 'bibo',
        english: 'I drink',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-lupus-13',
        latin: 'fit',
        english: 'he/she becomes, is made',
        partOfSpeech: 'verb'
      },
      {
        id: 'vocab-lupus-14',
        latin: 'nunc',
        english: 'now',
        partOfSpeech: 'adverb'
      }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  }
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
