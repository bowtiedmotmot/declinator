import type { Passage } from '../types';

export const passages: Passage[] = [
  {
    id: 'passage-1-marcus-roma',
    title: 'Marcus in Roma',
    latin:
      'Marcus est filius agricolae. Habitatōrēs in agris labōrant. Mārcus quoque labōrat et multas hōrās in villā studet. Pater eius est vir bonus et magnus. Mārcus patrem amat et auxilium dat.',
    sentences: [
      { latin: 'Marcus est filius agricolae.', english: 'Marcus is the son of a farmer.' },
      { latin: 'Habitatōrēs in agris labōrant.', english: 'The inhabitants work in the fields.' },
      { latin: 'Mārcus quoque labōrat et multas hōrās in villā studet.', english: 'Marcus also works and studies for many hours in the farmhouse.' },
      { latin: 'Pater eius est vir bonus et magnus.', english: 'His father is a good and great man.' },
      { latin: 'Mārcus patrem amat et auxilium dat.', english: 'Marcus loves his father and gives help.' }
    ],
    questions: [
      { id: 'q1-1', prompt: 'Who is Marcus?', choices: ['A farmer', 'The son of a farmer', 'A teacher', 'A soldier'], correctIndex: 1, explanation: '"Marcus est filius agricolae" — Marcus is the son of a farmer.' },
      { id: 'q1-2', prompt: 'Where do the inhabitants work?', choices: ['In the city', 'In the market', 'In the fields', 'In the sea'], correctIndex: 2, explanation: '"Habitatōrēs in agris labōrant" — inhabitants work in the fields.' },
      { id: 'q1-3', prompt: 'What kind of person is Marcus\'s father?', choices: ['Small and bad', 'Good and great', 'Young and poor', 'Old and tired'], correctIndex: 1, explanation: '"vir bonus et magnus" — a good and great man.' },
      { id: 'q1-4', prompt: 'What does Marcus do besides work?', choices: ['He hunts', 'He travels', 'He studies in the farmhouse', 'He fights'], correctIndex: 2, explanation: '"multas hōrās in villā studet" — he studies for many hours in the farmhouse.' }
    ],
    vocabulary: [
      { id: 'v1-1', latin: 'filius', english: 'son', partOfSpeech: 'noun' },
      { id: 'v1-2', latin: 'agricola', english: 'farmer', partOfSpeech: 'noun' },
      { id: 'v1-3', latin: 'ager', english: 'field', partOfSpeech: 'noun' },
      { id: 'v1-4', latin: 'laboro', english: 'I work, I labor', partOfSpeech: 'verb' },
      { id: 'v1-5', latin: 'villa', english: 'farmhouse, country house', partOfSpeech: 'noun' },
      { id: 'v1-6', latin: 'studeo', english: 'I study', partOfSpeech: 'verb' },
      { id: 'v1-7', latin: 'pater', english: 'father', partOfSpeech: 'noun' },
      { id: 'v1-8', latin: 'bonus', english: 'good', partOfSpeech: 'adjective' },
      { id: 'v1-9', latin: 'magnus', english: 'great, large', partOfSpeech: 'adjective' },
      { id: 'v1-10', latin: 'amo', english: 'I love, I like', partOfSpeech: 'verb' },
      { id: 'v1-11', latin: 'auxilium', english: 'help, aid', partOfSpeech: 'noun' },
      { id: 'v1-12', latin: 'do', english: 'I give', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-2-puella-rosa',
    title: 'Puella et Rosa',
    latin:
      'Puella pulchra est et in villā habitat. Rosa est flos magnus et pulcher. Puella rosam amat quia flos est bonus. Quotidie aquam dat florī. Amici puellae veniunt et rosam vident. Omnes rosam laudant.',
    sentences: [
      { latin: 'Puella pulchra est et in villā habitat.', english: 'The girl is beautiful and lives in a house.' },
      { latin: 'Rosa est flos magnus et pulcher.', english: 'The rose is a large and beautiful flower.' },
      { latin: 'Puella rosam amat quia flos est bonus.', english: 'The girl loves the rose because the flower is good.' },
      { latin: 'Quotidie aquam dat florī.', english: 'Every day she gives water to the flower.' },
      { latin: 'Amici puellae veniunt et rosam vident.', english: 'The girl\'s friends come and see the rose.' },
      { latin: 'Omnes rosam laudant.', english: 'Everyone praises the rose.' }
    ],
    questions: [
      { id: 'q2-1', prompt: 'What is the girl like?', choices: ['Ugly and sad', 'Beautiful and lives in a house', 'Tall and strong', 'Old and tired'], correctIndex: 1, explanation: '"Puella pulchra est et in villā habitat."' },
      { id: 'q2-2', prompt: 'Why does the girl love the rose?', choices: ['Because it is red', 'Because it is expensive', 'Because the flower is good', 'Because her mother gave it'], correctIndex: 2, explanation: '"quia flos est bonus" — because the flower is good.' },
      { id: 'q2-3', prompt: 'What does the girl give the flower every day?', choices: ['Food', 'Water', 'Light', 'Praise'], correctIndex: 1, explanation: '"Quotidie aquam dat florī" — every day she gives water to the flower.' },
      { id: 'q2-4', prompt: 'What do the friends do when they come?', choices: ['They pick the rose', 'They water the flower', 'They see and praise the rose', 'They bring gifts'], correctIndex: 2, explanation: '"Amici... rosam vident" and "Omnes rosam laudant."' }
    ],
    vocabulary: [
      { id: 'v2-1', latin: 'puella', english: 'girl', partOfSpeech: 'noun' },
      { id: 'v2-2', latin: 'pulcher', english: 'beautiful, pretty', partOfSpeech: 'adjective' },
      { id: 'v2-3', latin: 'rosa', english: 'rose', partOfSpeech: 'noun' },
      { id: 'v2-4', latin: 'flos', english: 'flower', partOfSpeech: 'noun' },
      { id: 'v2-5', latin: 'quia', english: 'because', partOfSpeech: 'conjunction' },
      { id: 'v2-6', latin: 'aqua', english: 'water', partOfSpeech: 'noun' },
      { id: 'v2-7', latin: 'quotidie', english: 'every day, daily', partOfSpeech: 'adverb' },
      { id: 'v2-8', latin: 'amicus', english: 'friend', partOfSpeech: 'noun' },
      { id: 'v2-9', latin: 'venio', english: 'I come', partOfSpeech: 'verb' },
      { id: 'v2-10', latin: 'video', english: 'I see', partOfSpeech: 'verb' },
      { id: 'v2-11', latin: 'omnes', english: 'all, everyone', partOfSpeech: 'pronoun' },
      { id: 'v2-12', latin: 'laudo', english: 'I praise', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-3-faber-lupus',
    title: 'Faber et Lupus',
    latin:
      'In silvā venit faber. Faber artem amat et multa facit. Lupus in silvis habitat et magnus est. Lupus fabrum videt et timet. Faber lupum non timet sed aquam offert. Lupus aquam bibit et amicus fit. Nunc faber et lupus boni amici sunt.',
    sentences: [
      { latin: 'In silvā venit faber.', english: 'A craftsman comes into the forest.' },
      { latin: 'Faber artem amat et multa facit.', english: 'The craftsman loves his craft and makes many things.' },
      { latin: 'Lupus in silvis habitat et magnus est.', english: 'The wolf lives in the forests and is large.' },
      { latin: 'Lupus fabrum videt et timet.', english: 'The wolf sees the craftsman and is afraid.' },
      { latin: 'Faber lupum non timet sed aquam offert.', english: 'The craftsman does not fear the wolf but offers water.' },
      { latin: 'Lupus aquam bibit et amicus fit.', english: 'The wolf drinks the water and becomes a friend.' },
      { latin: 'Nunc faber et lupus boni amici sunt.', english: 'Now the craftsman and the wolf are good friends.' }
    ],
    questions: [
      { id: 'q3-1', prompt: 'Where does the story take place?', choices: ['In a city', 'In a forest', 'In a house', 'By the sea'], correctIndex: 1, explanation: '"In silvā venit faber" — a craftsman comes into the forest.' },
      { id: 'q3-2', prompt: 'What is the wolf\'s first reaction to the craftsman?', choices: ['He is happy', 'He attacks', 'He is afraid', 'He runs away'], correctIndex: 2, explanation: '"Lupus fabrum videt et timet" — the wolf sees the craftsman and is afraid.' },
      { id: 'q3-3', prompt: 'How does the craftsman respond to the wolf?', choices: ['He runs away', 'He attacks', 'He offers water', 'He calls for help'], correctIndex: 2, explanation: '"Faber lupum non timet sed aquam offert."' },
      { id: 'q3-4', prompt: 'What is the final outcome?', choices: ['The wolf attacks', 'They become good friends', 'The craftsman leaves', 'They ignore each other'], correctIndex: 1, explanation: '"Nunc faber et lupus boni amici sunt."' }
    ],
    vocabulary: [
      { id: 'v3-1', latin: 'silva', english: 'forest, wood', partOfSpeech: 'noun' },
      { id: 'v3-2', latin: 'faber', english: 'craftsman, artisan', partOfSpeech: 'noun' },
      { id: 'v3-3', latin: 'ars', english: 'art, craft, skill', partOfSpeech: 'noun' },
      { id: 'v3-4', latin: 'facio', english: 'I make, I do', partOfSpeech: 'verb' },
      { id: 'v3-5', latin: 'lupus', english: 'wolf', partOfSpeech: 'noun' },
      { id: 'v3-6', latin: 'habito', english: 'I live, I dwell', partOfSpeech: 'verb' },
      { id: 'v3-7', latin: 'timeo', english: 'I fear, I am afraid', partOfSpeech: 'verb' },
      { id: 'v3-8', latin: 'offero', english: 'I offer, I present', partOfSpeech: 'verb' },
      { id: 'v3-9', latin: 'bibo', english: 'I drink', partOfSpeech: 'verb' },
      { id: 'v3-10', latin: 'nunc', english: 'now', partOfSpeech: 'adverb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-4-canis-felis',
    title: 'Canis et Felis',
    latin:
      'Canis et felis in villā habitant. Canis magnus et fortis est. Felis parva et velox est. Canis dominum amat et villam custodit. Felis mures capit et saepe dormit. Amici non sunt sed in pace vivunt.',
    sentences: [
      { latin: 'Canis et felis in villā habitant.', english: 'The dog and the cat live in the farmhouse.' },
      { latin: 'Canis magnus et fortis est.', english: 'The dog is large and strong.' },
      { latin: 'Felis parva et velox est.', english: 'The cat is small and quick.' },
      { latin: 'Canis dominum amat et villam custodit.', english: 'The dog loves his master and guards the farmhouse.' },
      { latin: 'Felis mures capit et saepe dormit.', english: 'The cat catches mice and often sleeps.' },
      { latin: 'Amici non sunt sed in pace vivunt.', english: 'They are not friends but they live in peace.' }
    ],
    questions: [
      { id: 'q4-1', prompt: 'What is the dog like?', choices: ['Small and quick', 'Large and strong', 'Old and slow', 'Young and weak'], correctIndex: 1, explanation: '"Canis magnus et fortis est."' },
      { id: 'q4-2', prompt: 'What does the cat do?', choices: ['Guards the house', 'Loves the master', 'Catches mice and sleeps', 'Plays in the field'], correctIndex: 2, explanation: '"Felis mures capit et saepe dormit."' },
      { id: 'q4-3', prompt: 'What does the dog do for his master?', choices: ['Catches mice', 'Guards the house', 'Brings food', 'Teaches tricks'], correctIndex: 1, explanation: '"Canis dominum amat et villam custodit."' },
      { id: 'q4-4', prompt: 'How do the dog and cat get along?', choices: ['They are best friends', 'They fight always', 'Not friends but live in peace', 'They ignore each other completely'], correctIndex: 2, explanation: '"Amici non sunt sed in pace vivunt."' }
    ],
    vocabulary: [
      { id: 'v4-1', latin: 'canis', english: 'dog', partOfSpeech: 'noun' },
      { id: 'v4-2', latin: 'felis', english: 'cat', partOfSpeech: 'noun' },
      { id: 'v4-3', latin: 'fortis', english: 'strong, brave', partOfSpeech: 'adjective' },
      { id: 'v4-4', latin: 'parvus', english: 'small, little', partOfSpeech: 'adjective' },
      { id: 'v4-5', latin: 'velox', english: 'quick, fast', partOfSpeech: 'adjective' },
      { id: 'v4-6', latin: 'dominus', english: 'master, lord', partOfSpeech: 'noun' },
      { id: 'v4-7', latin: 'custodio', english: 'I guard, I watch over', partOfSpeech: 'verb' },
      { id: 'v4-8', latin: 'mus', english: 'mouse', partOfSpeech: 'noun' },
      { id: 'v4-9', latin: 'capio', english: 'I catch, I take', partOfSpeech: 'verb' },
      { id: 'v4-10', latin: 'saepe', english: 'often', partOfSpeech: 'adverb' },
      { id: 'v4-11', latin: 'dormio', english: 'I sleep', partOfSpeech: 'verb' },
      { id: 'v4-12', latin: 'pax', english: 'peace', partOfSpeech: 'noun' },
      { id: 'v4-13', latin: 'vivo', english: 'I live', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-5-forum-romanum',
    title: 'In Foro Romano',
    latin:
      'Forum Romanum in mediā urbe est. Multi cives in foro ambulant. Mercatores merces vendunt. Oratores in rostris clamant. Templa magna et pulchra sunt. Cives Romani forum amant.',
    sentences: [
      { latin: 'Forum Romanum in mediā urbe est.', english: 'The Roman Forum is in the middle of the city.' },
      { latin: 'Multi cives in foro ambulant.', english: 'Many citizens walk in the forum.' },
      { latin: 'Mercatores merces vendunt.', english: 'Merchants sell their goods.' },
      { latin: 'Oratores in rostris clamant.', english: 'Speakers shout from the rostra.' },
      { latin: 'Templa magna et pulchra sunt.', english: 'The temples are large and beautiful.' },
      { latin: 'Cives Romani forum amant.', english: 'The Roman citizens love the forum.' }
    ],
    questions: [
      { id: 'q5-1', prompt: 'Where is the Roman Forum?', choices: ['Outside the city', 'In the middle of the city', 'Near the sea', 'On a hill'], correctIndex: 1, explanation: '"Forum Romanum in mediā urbe est."' },
      { id: 'q5-2', prompt: 'What do merchants do in the forum?', choices: ['Walk and talk', 'Sell their goods', 'Make speeches', 'Pray to gods'], correctIndex: 1, explanation: '"Mercatores merces vendunt."' },
      { id: 'q5-3', prompt: 'What are the temples like?', choices: ['Small and plain', 'Old and ruined', 'Large and beautiful', 'Dark and scary'], correctIndex: 2, explanation: '"Templa magna et pulchra sunt."' },
      { id: 'q5-4', prompt: 'Who speaks from the rostra?', choices: ['Merchants', 'Citizens', 'Speakers/orators', 'Soldiers'], correctIndex: 2, explanation: '"Oratores in rostris clamant."' }
    ],
    vocabulary: [
      { id: 'v5-1', latin: 'forum', english: 'forum, marketplace', partOfSpeech: 'noun' },
      { id: 'v5-2', latin: 'urbs', english: 'city', partOfSpeech: 'noun' },
      { id: 'v5-3', latin: 'civis', english: 'citizen', partOfSpeech: 'noun' },
      { id: 'v5-4', latin: 'ambulo', english: 'I walk', partOfSpeech: 'verb' },
      { id: 'v5-5', latin: 'mercator', english: 'merchant, trader', partOfSpeech: 'noun' },
      { id: 'v5-6', latin: 'merx', english: 'goods, merchandise', partOfSpeech: 'noun' },
      { id: 'v5-7', latin: 'vendo', english: 'I sell', partOfSpeech: 'verb' },
      { id: 'v5-8', latin: 'orator', english: 'speaker, orator', partOfSpeech: 'noun' },
      { id: 'v5-9', latin: 'clamo', english: 'I shout, I cry out', partOfSpeech: 'verb' },
      { id: 'v5-10', latin: 'templum', english: 'temple', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-6-nauta-mare',
    title: 'Nauta et Mare',
    latin:
      'Nauta prope mare habitat. Naviculam parvam habet et cotidie navigat. Pisces capit et in foro vendit. Mare magnum et pulchrum est. Nauta vitam suam amat.',
    sentences: [
      { latin: 'Nauta prope mare habitat.', english: 'The sailor lives near the sea.' },
      { latin: 'Naviculam parvam habet et cotidie navigat.', english: 'He has a small boat and sails every day.' },
      { latin: 'Pisces capit et in foro vendit.', english: 'He catches fish and sells them in the forum.' },
      { latin: 'Mare magnum et pulchrum est.', english: 'The sea is large and beautiful.' },
      { latin: 'Nauta vitam suam amat.', english: 'The sailor loves his life.' }
    ],
    questions: [
      { id: 'q6-1', prompt: 'Where does the sailor live?', choices: ['In the city', 'In the mountains', 'Near the sea', 'In the forest'], correctIndex: 2, explanation: '"Nauta prope mare habitat."' },
      { id: 'q6-2', prompt: 'What does the sailor do with the fish he catches?', choices: ['Eats them all', 'Throws them back', 'Sells them in the forum', 'Gives them to friends'], correctIndex: 2, explanation: '"Pisces capit et in foro vendit."' },
      { id: 'q6-3', prompt: 'How is the sea described?', choices: ['Cold and dark', 'Large and beautiful', 'Rough and dangerous', 'Small and calm'], correctIndex: 1, explanation: '"Mare magnum et pulchrum est."' },
      { id: 'q6-4', prompt: 'How does the sailor feel about his life?', choices: ['He hates it', 'He is sad', 'He loves it', 'He is bored'], correctIndex: 2, explanation: '"Nauta vitam suam amat."' }
    ],
    vocabulary: [
      { id: 'v6-1', latin: 'nauta', english: 'sailor', partOfSpeech: 'noun' },
      { id: 'v6-2', latin: 'prope', english: 'near, nearby', partOfSpeech: 'preposition' },
      { id: 'v6-3', latin: 'mare', english: 'sea', partOfSpeech: 'noun' },
      { id: 'v6-4', latin: 'navicula', english: 'small boat', partOfSpeech: 'noun' },
      { id: 'v6-5', latin: 'navigo', english: 'I sail', partOfSpeech: 'verb' },
      { id: 'v6-6', latin: 'piscis', english: 'fish', partOfSpeech: 'noun' },
      { id: 'v6-7', latin: 'vita', english: 'life', partOfSpeech: 'noun' },
      { id: 'v6-8', latin: 'cotidie', english: 'every day, daily', partOfSpeech: 'adverb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-7-rex-regina',
    title: 'Rex et Regina',
    latin:
      'Rex et regina in magnā villā habitant. Rex populum regit et servat. Regina pulchra et sapiens est. Filii regis in scholā student. Rex populum suum amat. Populus regem et reginam laudat.',
    sentences: [
      { latin: 'Rex et regina in magnā villā habitant.', english: 'The king and queen live in a large house.' },
      { latin: 'Rex populum regit et servat.', english: 'The king rules and protects the people.' },
      { latin: 'Regina pulchra et sapiens est.', english: 'The queen is beautiful and wise.' },
      { latin: 'Filii regis in scholā student.', english: 'The king\'s sons study at school.' },
      { latin: 'Rex populum suum amat.', english: 'The king loves his people.' },
      { latin: 'Populus regem et reginam laudat.', english: 'The people praise the king and queen.' }
    ],
    questions: [
      { id: 'q7-1', prompt: 'What does the king do for the people?', choices: ['Ignores them', 'Rules and protects them', 'Taxes them heavily', 'Teaches them'], correctIndex: 1, explanation: '"Rex populum regit et servat."' },
      { id: 'q7-2', prompt: 'How is the queen described?', choices: ['Cruel and proud', 'Old and wise', 'Beautiful and wise', 'Young and strong'], correctIndex: 2, explanation: '"Regina pulchra et sapiens est."' },
      { id: 'q7-3', prompt: 'Where do the king\'s sons study?', choices: ['At home', 'In the forum', 'At school', 'In the palace'], correctIndex: 2, explanation: '"Filii regis in scholā student."' },
      { id: 'q7-4', prompt: 'How do the people feel about the king and queen?', choices: ['They fear them', 'They praise them', 'They ignore them', 'They fight them'], correctIndex: 1, explanation: '"Populus regem et reginam laudat."' }
    ],
    vocabulary: [
      { id: 'v7-1', latin: 'rex', english: 'king', partOfSpeech: 'noun' },
      { id: 'v7-2', latin: 'regina', english: 'queen', partOfSpeech: 'noun' },
      { id: 'v7-3', latin: 'populus', english: 'people, nation', partOfSpeech: 'noun' },
      { id: 'v7-4', latin: 'rego', english: 'I rule, I govern', partOfSpeech: 'verb' },
      { id: 'v7-5', latin: 'servo', english: 'I protect, I save', partOfSpeech: 'verb' },
      { id: 'v7-6', latin: 'sapiens', english: 'wise', partOfSpeech: 'adjective' },
      { id: 'v7-7', latin: 'schola', english: 'school', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-8-miles-romanus',
    title: 'Miles Romanus',
    latin:
      'Marcus miles Romanus est. Gladium et scutum habet. Cum multis militibus in legione servit. Cotidie exercetur et fortis fit. Miles pro patria pugnat.',
    sentences: [
      { latin: 'Marcus miles Romanus est.', english: 'Marcus is a Roman soldier.' },
      { latin: 'Gladium et scutum habet.', english: 'He has a sword and a shield.' },
      { latin: 'Cum multis militibus in legione servit.', english: 'He serves with many soldiers in the legion.' },
      { latin: 'Cotidie exercetur et fortis fit.', english: 'Every day he trains and becomes strong.' },
      { latin: 'Miles pro patria pugnat.', english: 'The soldier fights for his homeland.' }
    ],
    questions: [
      { id: 'q8-1', prompt: 'What weapons does Marcus have?', choices: ['Bow and arrows', 'Spear and helmet', 'Sword and shield', 'Axe and club'], correctIndex: 2, explanation: '"Gladium et scutum habet."' },
      { id: 'q8-2', prompt: 'Where does Marcus serve?', choices: ['In the navy', 'In the legion', 'In the palace guard', 'Alone'], correctIndex: 1, explanation: '"in legione servit."' },
      { id: 'q8-3', prompt: 'What happens when Marcus trains every day?', choices: ['He gets tired', 'He becomes rich', 'He becomes strong', 'He gets bored'], correctIndex: 2, explanation: '"Cotidie exercetur et fortis fit."' },
      { id: 'q8-4', prompt: 'Who does the soldier fight for?', choices: ['His king', 'His family', 'His homeland', 'His general'], correctIndex: 2, explanation: '"Miles pro patria pugnat."' }
    ],
    vocabulary: [
      { id: 'v8-1', latin: 'miles', english: 'soldier', partOfSpeech: 'noun' },
      { id: 'v8-2', latin: 'gladius', english: 'sword', partOfSpeech: 'noun' },
      { id: 'v8-3', latin: 'scutum', english: 'shield', partOfSpeech: 'noun' },
      { id: 'v8-4', latin: 'legio', english: 'legion', partOfSpeech: 'noun' },
      { id: 'v8-5', latin: 'servio', english: 'I serve', partOfSpeech: 'verb' },
      { id: 'v8-6', latin: 'exerceo', english: 'I train, I exercise', partOfSpeech: 'verb' },
      { id: 'v8-7', latin: 'pugno', english: 'I fight', partOfSpeech: 'verb' },
      { id: 'v8-8', latin: 'patria', english: 'homeland, fatherland', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-9-puer-magister',
    title: 'Puer et Magister',
    latin:
      'Gaius puer Romanus est. Cotidie ad scholam it. Magister discipulos Latine docet. Gaius scribit et legit. Magister Gaium laudat quia bonus discipulus est.',
    sentences: [
      { latin: 'Gaius puer Romanus est.', english: 'Gaius is a Roman boy.' },
      { latin: 'Cotidie ad scholam it.', english: 'Every day he goes to school.' },
      { latin: 'Magister discipulos Latine docet.', english: 'The teacher teaches the students in Latin.' },
      { latin: 'Gaius scribit et legit.', english: 'Gaius writes and reads.' },
      { latin: 'Magister Gaium laudat quia bonus discipulus est.', english: 'The teacher praises Gaius because he is a good student.' }
    ],
    questions: [
      { id: 'q9-1', prompt: 'How often does Gaius go to school?', choices: ['Once a week', 'Every day', 'Twice a week', 'Never'], correctIndex: 1, explanation: '"Cotidie ad scholam it."' },
      { id: 'q9-2', prompt: 'What language does the teacher teach in?', choices: ['Greek', 'Latin', 'Both Greek and Latin', 'Neither'], correctIndex: 1, explanation: '"Magister discipulos Latine docet."' },
      { id: 'q9-3', prompt: 'What does Gaius do at school?', choices: ['Plays games', 'Writes and reads', 'Draws pictures', 'Sleeps'], correctIndex: 1, explanation: '"Gaius scribit et legit."' },
      { id: 'q9-4', prompt: 'Why does the teacher praise Gaius?', choices: ['He is the fastest runner', 'He brings gifts', 'He is a good student', 'He is the teacher\'s son'], correctIndex: 2, explanation: '"quia bonus discipulus est."' }
    ],
    vocabulary: [
      { id: 'v9-1', latin: 'puer', english: 'boy', partOfSpeech: 'noun' },
      { id: 'v9-2', latin: 'magister', english: 'teacher, master', partOfSpeech: 'noun' },
      { id: 'v9-3', latin: 'discipulus', english: 'student, pupil', partOfSpeech: 'noun' },
      { id: 'v9-4', latin: 'doceo', english: 'I teach', partOfSpeech: 'verb' },
      { id: 'v9-5', latin: 'scribo', english: 'I write', partOfSpeech: 'verb' },
      { id: 'v9-6', latin: 'lego', english: 'I read', partOfSpeech: 'verb' },
      { id: 'v9-7', latin: 'eo', english: 'I go', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-10-aestas-hiems',
    title: 'Aestas et Hiems',
    latin:
      'In aestate sol lucet et dies longi sunt. Pueri in agris ludunt et laeti sunt. In hieme frigus est et dies breves sunt. Agricolae in villis manent. Omnes aestatem amant.',
    sentences: [
      { latin: 'In aestate sol lucet et dies longi sunt.', english: 'In summer the sun shines and the days are long.' },
      { latin: 'Pueri in agris ludunt et laeti sunt.', english: 'Boys play in the fields and are happy.' },
      { latin: 'In hieme frigus est et dies breves sunt.', english: 'In winter there is cold and the days are short.' },
      { latin: 'Agricolae in villis manent.', english: 'The farmers stay in the farmhouses.' },
      { latin: 'Omnes aestatem amant.', english: 'Everyone loves summer.' }
    ],
    questions: [
      { id: 'q10-1', prompt: 'What is the sun doing in summer?', choices: ['Setting early', 'Shining', 'Hidden by clouds', 'Rising late'], correctIndex: 1, explanation: '"sol lucet" — the sun shines.' },
      { id: 'q10-2', prompt: 'Where do boys play in summer?', choices: ['In the city', 'In the sea', 'In the fields', 'In the forum'], correctIndex: 2, explanation: '"Pueri in agris ludunt."' },
      { id: 'q10-3', prompt: 'What are the days like in winter?', choices: ['Long and warm', 'Short and cold', 'Rainy and mild', 'Short and hot'], correctIndex: 1, explanation: '"frigus est et dies breves sunt."' },
      { id: 'q10-4', prompt: 'What do farmers do in winter?', choices: ['Plant crops', 'Go to market', 'Stay in the farmhouses', 'Travel to the city'], correctIndex: 2, explanation: '"Agricolae in villis manent."' }
    ],
    vocabulary: [
      { id: 'v10-1', latin: 'aestas', english: 'summer', partOfSpeech: 'noun' },
      { id: 'v10-2', latin: 'sol', english: 'sun', partOfSpeech: 'noun' },
      { id: 'v10-3', latin: 'luceo', english: 'I shine', partOfSpeech: 'verb' },
      { id: 'v10-4', latin: 'dies', english: 'day', partOfSpeech: 'noun' },
      { id: 'v10-5', latin: 'longus', english: 'long', partOfSpeech: 'adjective' },
      { id: 'v10-6', latin: 'ludo', english: 'I play', partOfSpeech: 'verb' },
      { id: 'v10-7', latin: 'laetus', english: 'happy, glad', partOfSpeech: 'adjective' },
      { id: 'v10-8', latin: 'hiems', english: 'winter', partOfSpeech: 'noun' },
      { id: 'v10-9', latin: 'frigus', english: 'cold, coldness', partOfSpeech: 'noun' },
      { id: 'v10-10', latin: 'brevis', english: 'short, brief', partOfSpeech: 'adjective' },
      { id: 'v10-11', latin: 'maneo', english: 'I stay, I remain', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-11-cicada-formica',
    title: 'Cicada et Formica',
    latin:
      'Cicada tota aestate canit. Formica cibum colligit et portat. Venit hiems et cicada esurit. Cicada ad formicam venit et cibum rogat. Formica cicadae non dat. Cicada tristis est.',
    sentences: [
      { latin: 'Cicada tota aestate canit.', english: 'The cicada sings all summer long.' },
      { latin: 'Formica cibum colligit et portat.', english: 'The ant collects and carries food.' },
      { latin: 'Venit hiems et cicada esurit.', english: 'Winter comes and the cicada is hungry.' },
      { latin: 'Cicada ad formicam venit et cibum rogat.', english: 'The cicada comes to the ant and asks for food.' },
      { latin: 'Formica cicadae non dat.', english: 'The ant does not give food to the cicada.' },
      { latin: 'Cicada tristis est.', english: 'The cicada is sad.' }
    ],
    questions: [
      { id: 'q11-1', prompt: 'What does the cicada do all summer?', choices: ['Works hard', 'Collects food', 'Sings', 'Sleeps'], correctIndex: 2, explanation: '"Cicada tota aestate canit."' },
      { id: 'q11-2', prompt: 'What does the ant do during summer?', choices: ['Sings and dances', 'Collects and carries food', 'Sleeps', 'Visits friends'], correctIndex: 1, explanation: '"Formica cibum colligit et portat."' },
      { id: 'q11-3', prompt: 'What happens to the cicada in winter?', choices: ['She is happy', 'She is hungry', 'She finds food easily', 'She sings more'], correctIndex: 1, explanation: '"cicada esurit."' },
      { id: 'q11-4', prompt: 'What does the ant do when the cicada asks for food?', choices: ['Gives her plenty', 'Shares a little', 'Does not give her any', 'Ignores her'], correctIndex: 2, explanation: '"Formica cicadae non dat."' }
    ],
    vocabulary: [
      { id: 'v11-1', latin: 'cicada', english: 'cicada, grasshopper', partOfSpeech: 'noun' },
      { id: 'v11-2', latin: 'formica', english: 'ant', partOfSpeech: 'noun' },
      { id: 'v11-3', latin: 'cano', english: 'I sing', partOfSpeech: 'verb' },
      { id: 'v11-4', latin: 'cibus', english: 'food', partOfSpeech: 'noun' },
      { id: 'v11-5', latin: 'colligo', english: 'I collect, I gather', partOfSpeech: 'verb' },
      { id: 'v11-6', latin: 'porto', english: 'I carry', partOfSpeech: 'verb' },
      { id: 'v11-7', latin: 'esurio', english: 'I am hungry', partOfSpeech: 'verb' },
      { id: 'v11-8', latin: 'rogo', english: 'I ask, I request', partOfSpeech: 'verb' },
      { id: 'v11-9', latin: 'tristis', english: 'sad', partOfSpeech: 'adjective' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Aesop'
  },

  {
    id: 'passage-12-corvus-vulpes',
    title: 'Corvus et Vulpes',
    latin:
      'Corvus in arbore sedet et caseum tenet. Vulpes caseum videt et cupit. Vulpes corvo dicit: "Vox tua pulchra est!" Corvus gaudet et canit. Caseus de ore corvi cadit. Vulpes caseum rapit et fugit.',
    sentences: [
      { latin: 'Corvus in arbore sedet et caseum tenet.', english: 'The crow sits in a tree and holds a piece of cheese.' },
      { latin: 'Vulpes caseum videt et cupit.', english: 'The fox sees the cheese and wants it.' },
      { latin: 'Vulpes corvo dicit: "Vox tua pulchra est!"', english: 'The fox says to the crow: "Your voice is beautiful!"' },
      { latin: 'Corvus gaudet et canit.', english: 'The crow is pleased and sings.' },
      { latin: 'Caseus de ore corvi cadit.', english: 'The cheese falls from the crow\'s mouth.' },
      { latin: 'Vulpes caseum rapit et fugit.', english: 'The fox snatches the cheese and runs away.' }
    ],
    questions: [
      { id: 'q12-1', prompt: 'Where is the crow sitting?', choices: ['On a rock', 'In a tree', 'On the ground', 'On a roof'], correctIndex: 1, explanation: '"Corvus in arbore sedet."' },
      { id: 'q12-2', prompt: 'What does the fox want?', choices: ['The crow itself', 'The tree', 'The cheese', 'The crow\'s nest'], correctIndex: 2, explanation: '"Vulpes caseum videt et cupit."' },
      { id: 'q12-3', prompt: 'What does the fox say to the crow?', choices: ['"You are ugly!"', '"Your voice is beautiful!"', '"Give me your food!"', '"Come down here!"'], correctIndex: 1, explanation: '"Vox tua pulchra est!"' },
      { id: 'q12-4', prompt: 'Why does the cheese fall?', choices: ['The wind blows it', 'The crow drops it on purpose', 'The crow opens its mouth to sing', 'The tree shakes'], correctIndex: 2, explanation: '"Corvus gaudet et canit. Caseus de ore corvi cadit."' }
    ],
    vocabulary: [
      { id: 'v12-1', latin: 'corvus', english: 'crow, raven', partOfSpeech: 'noun' },
      { id: 'v12-2', latin: 'arbor', english: 'tree', partOfSpeech: 'noun' },
      { id: 'v12-3', latin: 'sedeo', english: 'I sit', partOfSpeech: 'verb' },
      { id: 'v12-4', latin: 'caseus', english: 'cheese', partOfSpeech: 'noun' },
      { id: 'v12-5', latin: 'teneo', english: 'I hold', partOfSpeech: 'verb' },
      { id: 'v12-6', latin: 'vulpes', english: 'fox', partOfSpeech: 'noun' },
      { id: 'v12-7', latin: 'cupio', english: 'I want, I desire', partOfSpeech: 'verb' },
      { id: 'v12-8', latin: 'vox', english: 'voice', partOfSpeech: 'noun' },
      { id: 'v12-9', latin: 'gaudeo', english: 'I rejoice, I am glad', partOfSpeech: 'verb' },
      { id: 'v12-10', latin: 'os', english: 'mouth', partOfSpeech: 'noun' },
      { id: 'v12-11', latin: 'cado', english: 'I fall', partOfSpeech: 'verb' },
      { id: 'v12-12', latin: 'fugio', english: 'I flee, I run away', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Aesop'
  },

  {
    id: 'passage-13-cena-romana',
    title: 'Cena Romana',
    latin:
      'Familia Romana ad cenam convenit. Servi cibum et vinum adferunt. Pater omnibus dat. Cibum edunt et vinum bibunt. Omnes laeti sunt et fabulam narrant.',
    sentences: [
      { latin: 'Familia Romana ad cenam convenit.', english: 'The Roman family gathers for dinner.' },
      { latin: 'Servi cibum et vinum adferunt.', english: 'The slaves bring food and wine.' },
      { latin: 'Pater omnibus dat.', english: 'The father gives to everyone.' },
      { latin: 'Cibum edunt et vinum bibunt.', english: 'They eat food and drink wine.' },
      { latin: 'Omnes laeti sunt et fabulam narrant.', english: 'Everyone is happy and tells a story.' }
    ],
    questions: [
      { id: 'q13-1', prompt: 'Who gathers for dinner?', choices: ['Only the father', 'Only the children', 'The Roman family', 'The neighbors'], correctIndex: 2, explanation: '"Familia Romana ad cenam convenit."' },
      { id: 'q13-2', prompt: 'Who brings the food and wine?', choices: ['The mother', 'The father', 'The slaves', 'The children'], correctIndex: 2, explanation: '"Servi cibum et vinum adferunt."' },
      { id: 'q13-3', prompt: 'What do they drink at dinner?', choices: ['Water', 'Milk', 'Wine', 'Juice'], correctIndex: 2, explanation: '"vinum bibunt."' },
      { id: 'q13-4', prompt: 'What do they do after eating?', choices: ['Sleep immediately', 'Go to the forum', 'Tell a story', 'Sing songs'], correctIndex: 2, explanation: '"fabulam narrant."' }
    ],
    vocabulary: [
      { id: 'v13-1', latin: 'familia', english: 'family, household', partOfSpeech: 'noun' },
      { id: 'v13-2', latin: 'cena', english: 'dinner, meal', partOfSpeech: 'noun' },
      { id: 'v13-3', latin: 'convenio', english: 'I gather, I come together', partOfSpeech: 'verb' },
      { id: 'v13-4', latin: 'servus', english: 'slave, servant', partOfSpeech: 'noun' },
      { id: 'v13-5', latin: 'vinum', english: 'wine', partOfSpeech: 'noun' },
      { id: 'v13-6', latin: 'affero', english: 'I bring', partOfSpeech: 'verb' },
      { id: 'v13-7', latin: 'edo', english: 'I eat', partOfSpeech: 'verb' },
      { id: 'v13-8', latin: 'fabula', english: 'story, tale', partOfSpeech: 'noun' },
      { id: 'v13-9', latin: 'narro', english: 'I tell, I narrate', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-14-piscator',
    title: 'Piscator',
    latin:
      'Piscator prope flumen habitat. Mane surgit et hamum in aquam mittit. Piscis magnus capitur. Piscator laetus est et piscem domum fert. Mater piscem coquit et familia cenat.',
    sentences: [
      { latin: 'Piscator prope flumen habitat.', english: 'The fisherman lives near the river.' },
      { latin: 'Mane surgit et hamum in aquam mittit.', english: 'In the morning he gets up and throws a hook into the water.' },
      { latin: 'Piscis magnus capitur.', english: 'A large fish is caught.' },
      { latin: 'Piscator laetus est et piscem domum fert.', english: 'The fisherman is happy and brings the fish home.' },
      { latin: 'Mater piscem coquit et familia cenat.', english: 'The mother cooks the fish and the family dines.' }
    ],
    questions: [
      { id: 'q14-1', prompt: 'Where does the fisherman live?', choices: ['Near the sea', 'Near the river', 'In the city', 'In the mountains'], correctIndex: 1, explanation: '"Piscator prope flumen habitat."' },
      { id: 'q14-2', prompt: 'What does the fisherman do in the morning?', choices: ['Goes to market', 'Throws a hook in the water', 'Reads a book', 'Visits friends'], correctIndex: 1, explanation: '"hamum in aquam mittit."' },
      { id: 'q14-3', prompt: 'What kind of fish is caught?', choices: ['Small', 'Large', 'Golden', 'Many small ones'], correctIndex: 1, explanation: '"Piscis magnus capitur."' },
      { id: 'q14-4', prompt: 'Who cooks the fish?', choices: ['The fisherman', 'The father', 'The mother', 'A slave'], correctIndex: 2, explanation: '"Mater piscem coquit."' }
    ],
    vocabulary: [
      { id: 'v14-1', latin: 'piscator', english: 'fisherman', partOfSpeech: 'noun' },
      { id: 'v14-2', latin: 'flumen', english: 'river', partOfSpeech: 'noun' },
      { id: 'v14-3', latin: 'mane', english: 'in the morning, early', partOfSpeech: 'adverb' },
      { id: 'v14-4', latin: 'surgo', english: 'I rise, I get up', partOfSpeech: 'verb' },
      { id: 'v14-5', latin: 'hamus', english: 'hook, fishhook', partOfSpeech: 'noun' },
      { id: 'v14-6', latin: 'mitto', english: 'I send, I throw', partOfSpeech: 'verb' },
      { id: 'v14-7', latin: 'fero', english: 'I carry, I bring', partOfSpeech: 'verb' },
      { id: 'v14-8', latin: 'coquo', english: 'I cook', partOfSpeech: 'verb' },
      { id: 'v14-9', latin: 'domus', english: 'home, house', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-15-luna-stellae',
    title: 'Luna et Stellae',
    latin:
      'Nox venit et luna lucet. Stellae in caelo multae sunt. Puella e villa exit et caelum spectat. Luna et stellae pulchrae sunt. Puella dicit: "Caelum nocte pulchrum est!"',
    sentences: [
      { latin: 'Nox venit et luna lucet.', english: 'Night comes and the moon shines.' },
      { latin: 'Stellae in caelo multae sunt.', english: 'There are many stars in the sky.' },
      { latin: 'Puella e villa exit et caelum spectat.', english: 'The girl goes out of the farmhouse and looks at the sky.' },
      { latin: 'Luna et stellae pulchrae sunt.', english: 'The moon and stars are beautiful.' },
      { latin: 'Puella dicit: "Caelum nocte pulchrum est!"', english: 'The girl says: "The sky at night is beautiful!"' }
    ],
    questions: [
      { id: 'q15-1', prompt: 'What happens when night comes?', choices: ['The sun sets and nothing shines', 'The moon shines', 'It rains', 'The stars disappear'], correctIndex: 1, explanation: '"Nox venit et luna lucet."' },
      { id: 'q15-2', prompt: 'What does the girl do?', choices: ['Goes to sleep', 'Reads by the fire', 'Goes outside and looks at the sky', 'Calls her friends'], correctIndex: 2, explanation: '"Puella e villa exit et caelum spectat."' },
      { id: 'q15-3', prompt: 'How are the moon and stars described?', choices: ['Cold and distant', 'Beautiful', 'Frightening', 'Too bright'], correctIndex: 1, explanation: '"Luna et stellae pulchrae sunt."' },
      { id: 'q15-4', prompt: 'What does the girl say about the sky?', choices: ['"I am afraid"', '"It is too bright"', '"The sky at night is beautiful"', '"I want to go inside"'], correctIndex: 2, explanation: '"Caelum nocte pulchrum est!"' }
    ],
    vocabulary: [
      { id: 'v15-1', latin: 'nox', english: 'night', partOfSpeech: 'noun' },
      { id: 'v15-2', latin: 'luna', english: 'moon', partOfSpeech: 'noun' },
      { id: 'v15-3', latin: 'stella', english: 'star', partOfSpeech: 'noun' },
      { id: 'v15-4', latin: 'caelum', english: 'sky, heaven', partOfSpeech: 'noun' },
      { id: 'v15-5', latin: 'exeo', english: 'I go out, I exit', partOfSpeech: 'verb' },
      { id: 'v15-6', latin: 'specto', english: 'I look at, I watch', partOfSpeech: 'verb' },
      { id: 'v15-7', latin: 'dico', english: 'I say, I tell', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-16-mercator',
    title: 'Mercator in Via',
    latin:
      'Mercator per viam longam it. Multas merces in plaustro portat. Mane proficiscitur et vesperi ad oppidum advenit. Merces in foro vendit. Pecuniam domum fert et laetus est.',
    sentences: [
      { latin: 'Mercator per viam longam it.', english: 'The merchant travels along a long road.' },
      { latin: 'Multas merces in plaustro portat.', english: 'He carries many goods in a wagon.' },
      { latin: 'Mane proficiscitur et vesperi ad oppidum advenit.', english: 'He sets out in the morning and arrives at the town in the evening.' },
      { latin: 'Merces in foro vendit.', english: 'He sells his goods in the forum.' },
      { latin: 'Pecuniam domum fert et laetus est.', english: 'He brings money home and is happy.' }
    ],
    questions: [
      { id: 'q16-1', prompt: 'How does the merchant carry his goods?', choices: ['On his back', 'In a wagon', 'On a horse', 'In a boat'], correctIndex: 1, explanation: '"Multas merces in plaustro portat."' },
      { id: 'q16-2', prompt: 'When does the merchant set out?', choices: ['At noon', 'In the evening', 'In the morning', 'At night'], correctIndex: 2, explanation: '"Mane proficiscitur."' },
      { id: 'q16-3', prompt: 'When does he arrive at the town?', choices: ['At noon', 'In the morning', 'In the evening', 'At dawn'], correctIndex: 2, explanation: '"vesperi ad oppidum advenit."' },
      { id: 'q16-4', prompt: 'How does the merchant feel at the end?', choices: ['Tired and sad', 'Angry', 'Happy', 'Worried'], correctIndex: 2, explanation: '"laetus est."' }
    ],
    vocabulary: [
      { id: 'v16-1', latin: 'via', english: 'road, way', partOfSpeech: 'noun' },
      { id: 'v16-2', latin: 'plaustrum', english: 'wagon, cart', partOfSpeech: 'noun' },
      { id: 'v16-3', latin: 'proficiscor', english: 'I set out, I depart', partOfSpeech: 'verb' },
      { id: 'v16-4', latin: 'vesper', english: 'evening', partOfSpeech: 'noun' },
      { id: 'v16-5', latin: 'oppidum', english: 'town', partOfSpeech: 'noun' },
      { id: 'v16-6', latin: 'advenio', english: 'I arrive', partOfSpeech: 'verb' },
      { id: 'v16-7', latin: 'pecunia', english: 'money', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-17-vita-rustica',
    title: 'Vita Rustica',
    latin:
      'Agricola in villā magna habitat. Agros et animalia multa habet. Cotidie in agris laborat. Frumentum et fructus colligit. Vita rustica difficilis sed bona est.',
    sentences: [
      { latin: 'Agricola in villā magna habitat.', english: 'The farmer lives in a large farmhouse.' },
      { latin: 'Agros et animalia multa habet.', english: 'He has fields and many animals.' },
      { latin: 'Cotidie in agris laborat.', english: 'Every day he works in the fields.' },
      { latin: 'Frumentum et fructus colligit.', english: 'He gathers grain and fruit.' },
      { latin: 'Vita rustica difficilis sed bona est.', english: 'Country life is difficult but good.' }
    ],
    questions: [
      { id: 'q17-1', prompt: 'Where does the farmer live?', choices: ['In a small hut', 'In a large farmhouse', 'In the city', 'In a tent'], correctIndex: 1, explanation: '"Agricola in villā magna habitat."' },
      { id: 'q17-2', prompt: 'What does the farmer work with?', choices: ['Ships and nets', 'Fields and animals', 'Books and scrolls', 'Swords and shields'], correctIndex: 1, explanation: '"Agros et animalia multa habet."' },
      { id: 'q17-3', prompt: 'What does the farmer collect?', choices: ['Fish and shells', 'Gold and silver', 'Grain and fruit', 'Wood and stone'], correctIndex: 2, explanation: '"Frumentum et fructus colligit."' },
      { id: 'q17-4', prompt: 'How is country life described?', choices: ['Easy and fun', 'Difficult but good', 'Boring and long', 'Rich and comfortable'], correctIndex: 1, explanation: '"Vita rustica difficilis sed bona est."' }
    ],
    vocabulary: [
      { id: 'v17-1', latin: 'animal', english: 'animal', partOfSpeech: 'noun' },
      { id: 'v17-2', latin: 'frumentum', english: 'grain, wheat', partOfSpeech: 'noun' },
      { id: 'v17-3', latin: 'fructus', english: 'fruit, produce', partOfSpeech: 'noun' },
      { id: 'v17-4', latin: 'difficilis', english: 'difficult, hard', partOfSpeech: 'adjective' },
      { id: 'v17-5', latin: 'rusticus', english: 'rural, country', partOfSpeech: 'adjective' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-18-in-schola',
    title: 'In Schola',
    latin:
      'Discipuli in scholā sedent. Magister intrat et discipuli surgunt. Magister Latine docet. Discipuli tabulas tenent et scribunt. Qui bene student magistrum delectant.',
    sentences: [
      { latin: 'Discipuli in scholā sedent.', english: 'The students sit in school.' },
      { latin: 'Magister intrat et discipuli surgunt.', english: 'The teacher enters and the students stand up.' },
      { latin: 'Magister Latine docet.', english: 'The teacher teaches in Latin.' },
      { latin: 'Discipuli tabulas tenent et scribunt.', english: 'The students hold their tablets and write.' },
      { latin: 'Qui bene student magistrum delectant.', english: 'Those who study well please the teacher.' }
    ],
    questions: [
      { id: 'q18-1', prompt: 'What do the students do when the teacher enters?', choices: ['Sit down', 'Clap their hands', 'Stand up', 'Leave the room'], correctIndex: 2, explanation: '"Magister intrat et discipuli surgunt."' },
      { id: 'q18-2', prompt: 'What language does the teacher teach in?', choices: ['Greek', 'Latin', 'Both', 'Their native language'], correctIndex: 1, explanation: '"Magister Latine docet."' },
      { id: 'q18-3', prompt: 'What do the students hold?', choices: ['Books', 'Scrolls', 'Tablets', 'Styluses only'], correctIndex: 2, explanation: '"Discipuli tabulas tenent."' },
      { id: 'q18-4', prompt: 'Who pleases the teacher?', choices: ['The oldest students', 'Those who study well', 'The quietest ones', 'The best athletes'], correctIndex: 1, explanation: '"Qui bene student magistrum delectant."' }
    ],
    vocabulary: [
      { id: 'v18-1', latin: 'intro', english: 'I enter', partOfSpeech: 'verb' },
      { id: 'v18-2', latin: 'tabula', english: 'tablet, board', partOfSpeech: 'noun' },
      { id: 'v18-3', latin: 'delecto', english: 'I please, I delight', partOfSpeech: 'verb' },
      { id: 'v18-4', latin: 'bene', english: 'well', partOfSpeech: 'adverb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-19-amici-boni',
    title: 'Amici Boni',
    latin:
      'Gaius et Marcus boni amici sunt. Cotidie simul ludunt et student. Gaius Marcum in scholā adiuvat. Marcus Gaio librum dat. Amicitia eorum magna et vera est.',
    sentences: [
      { latin: 'Gaius et Marcus boni amici sunt.', english: 'Gaius and Marcus are good friends.' },
      { latin: 'Cotidie simul ludunt et student.', english: 'Every day they play and study together.' },
      { latin: 'Gaius Marcum in scholā adiuvat.', english: 'Gaius helps Marcus at school.' },
      { latin: 'Marcus Gaio librum dat.', english: 'Marcus gives Gaius a book.' },
      { latin: 'Amicitia eorum magna et vera est.', english: 'Their friendship is great and true.' }
    ],
    questions: [
      { id: 'q19-1', prompt: 'What do Gaius and Marcus do every day?', choices: ['Fight and argue', 'Play and study together', 'Work in the fields', 'Visit the forum'], correctIndex: 1, explanation: '"Cotidie simul ludunt et student."' },
      { id: 'q19-2', prompt: 'How does Gaius help Marcus?', choices: ['He gives him food', 'He teaches him at school', 'He helps him at school', 'He carries his books'], correctIndex: 2, explanation: '"Gaius Marcum in scholā adiuvat."' },
      { id: 'q19-3', prompt: 'What does Marcus give Gaius?', choices: ['Money', 'Food', 'A book', 'A tablet'], correctIndex: 2, explanation: '"Marcus Gaio librum dat."' },
      { id: 'q19-4', prompt: 'How is their friendship described?', choices: ['New and fragile', 'Small but lasting', 'Great and true', 'Strange and unusual'], correctIndex: 2, explanation: '"Amicitia eorum magna et vera est."' }
    ],
    vocabulary: [
      { id: 'v19-1', latin: 'simul', english: 'together, at the same time', partOfSpeech: 'adverb' },
      { id: 'v19-2', latin: 'adiuvo', english: 'I help, I assist', partOfSpeech: 'verb' },
      { id: 'v19-3', latin: 'liber', english: 'book', partOfSpeech: 'noun' },
      { id: 'v19-4', latin: 'amicitia', english: 'friendship', partOfSpeech: 'noun' },
      { id: 'v19-5', latin: 'verus', english: 'true, real', partOfSpeech: 'adjective' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-20-de-aqua',
    title: 'De Aqua',
    latin:
      'Aqua vita est. Homines et animalia aquam quaerunt. Agricolae agros aquā rigant. Pueri in aquā ludunt. Sine aquā vivere non possumus.',
    sentences: [
      { latin: 'Aqua vita est.', english: 'Water is life.' },
      { latin: 'Homines et animalia aquam quaerunt.', english: 'People and animals seek water.' },
      { latin: 'Agricolae agros aquā rigant.', english: 'Farmers water their fields.' },
      { latin: 'Pueri in aquā ludunt.', english: 'Boys play in the water.' },
      { latin: 'Sine aquā vivere non possumus.', english: 'We cannot live without water.' }
    ],
    questions: [
      { id: 'q20-1', prompt: 'What does "Aqua vita est" mean?', choices: ['Water is cold', 'Water is life', 'Water is rare', 'Water is a gift'], correctIndex: 1, explanation: '"Aqua vita est" means "Water is life."' },
      { id: 'q20-2', prompt: 'Who seeks water?', choices: ['Only humans', 'Only animals', 'People and animals', 'Only farmers'], correctIndex: 2, explanation: '"Homines et animalia aquam quaerunt."' },
      { id: 'q20-3', prompt: 'What do farmers do with water?', choices: ['Drink it only', 'Sell it', 'Water their fields', 'Give it to animals only'], correctIndex: 2, explanation: '"Agricolae agros aquā rigant."' },
      { id: 'q20-4', prompt: 'What is stated about living without water?', choices: ['It is difficult', 'It is possible', 'We cannot do it', 'Animals can but people cannot'], correctIndex: 2, explanation: '"Sine aquā vivere non possumus."' }
    ],
    vocabulary: [
      { id: 'v20-1', latin: 'homo', english: 'person, human being', partOfSpeech: 'noun' },
      { id: 'v20-2', latin: 'quaero', english: 'I seek, I look for', partOfSpeech: 'verb' },
      { id: 'v20-3', latin: 'rigo', english: 'I water, I irrigate', partOfSpeech: 'verb' },
      { id: 'v20-4', latin: 'sine', english: 'without', partOfSpeech: 'preposition' },
      { id: 'v20-5', latin: 'possum', english: 'I am able, I can', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-21-romulus-remus',
    title: 'Romulus et Remus',
    latin:
      'Romulus et Remus fratres gemini erant. In flumine Tiberi expositi sunt. Lupa eos in silvis alit. Pastor postea eos invenit. Romulus Romam aedificat et rex fit.',
    sentences: [
      { latin: 'Romulus et Remus fratres gemini erant.', english: 'Romulus and Remus were twin brothers.' },
      { latin: 'In flumine Tiberi expositi sunt.', english: 'They were abandoned in the Tiber River.' },
      { latin: 'Lupa eos in silvis alit.', english: 'A she-wolf nurses them in the forests.' },
      { latin: 'Pastor postea eos invenit.', english: 'A shepherd later finds them.' },
      { latin: 'Romulus Romam aedificat et rex fit.', english: 'Romulus builds Rome and becomes king.' }
    ],
    questions: [
      { id: 'q21-1', prompt: 'Who were Romulus and Remus?', choices: ['Cousins', 'Twin brothers', 'Father and son', 'Friends'], correctIndex: 1, explanation: '"fratres gemini erant" — they were twin brothers.' },
      { id: 'q21-2', prompt: 'Where were they abandoned?', choices: ['In the forest', 'In the Tiber River', 'On a hill', 'In the city'], correctIndex: 1, explanation: '"In flumine Tiberi expositi sunt."' },
      { id: 'q21-3', prompt: 'Who nursed them?', choices: ['Their mother', 'A shepherd\'s wife', 'A she-wolf', 'A goddess'], correctIndex: 2, explanation: '"Lupa eos in silvis alit."' },
      { id: 'q21-4', prompt: 'What does Romulus do?', choices: ['Becomes a soldier', 'Builds Rome and becomes king', 'Goes to Greece', 'Becomes a shepherd'], correctIndex: 1, explanation: '"Romulus Romam aedificat et rex fit."' }
    ],
    vocabulary: [
      { id: 'v21-1', latin: 'frater', english: 'brother', partOfSpeech: 'noun' },
      { id: 'v21-2', latin: 'geminus', english: 'twin', partOfSpeech: 'adjective' },
      { id: 'v21-3', latin: 'lupa', english: 'she-wolf', partOfSpeech: 'noun' },
      { id: 'v21-4', latin: 'alo', english: 'I nourish, I nurse', partOfSpeech: 'verb' },
      { id: 'v21-5', latin: 'pastor', english: 'shepherd', partOfSpeech: 'noun' },
      { id: 'v21-6', latin: 'invenio', english: 'I find', partOfSpeech: 'verb' },
      { id: 'v21-7', latin: 'aedifico', english: 'I build', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Roman legend'
  },

  {
    id: 'passage-22-dea-diana',
    title: 'Dea Diana',
    latin:
      'Diana dea est et in silvis habitat. Arcum et sagittas semper habet. Cum nymphis venatur. Cervi eam timent et fugiunt. Diana animalia et silvas amat et custodit.',
    sentences: [
      { latin: 'Diana dea est et in silvis habitat.', english: 'Diana is a goddess and lives in the forests.' },
      { latin: 'Arcum et sagittas semper habet.', english: 'She always has a bow and arrows.' },
      { latin: 'Cum nymphis venatur.', english: 'She hunts with the nymphs.' },
      { latin: 'Cervi eam timent et fugiunt.', english: 'Deer fear her and flee.' },
      { latin: 'Diana animalia et silvas amat et custodit.', english: 'Diana loves and protects the animals and forests.' }
    ],
    questions: [
      { id: 'q22-1', prompt: 'Where does Diana live?', choices: ['In the city', 'On Mount Olympus', 'In the forests', 'By the sea'], correctIndex: 2, explanation: '"Diana... in silvis habitat."' },
      { id: 'q22-2', prompt: 'What does Diana always carry?', choices: ['A sword and shield', 'A bow and arrows', 'A spear', 'A torch'], correctIndex: 1, explanation: '"Arcum et sagittas semper habet."' },
      { id: 'q22-3', prompt: 'Who hunts with Diana?', choices: ['Other gods', 'Soldiers', 'Nymphs', 'Farmers'], correctIndex: 2, explanation: '"Cum nymphis venatur."' },
      { id: 'q22-4', prompt: 'How do the deer react to Diana?', choices: ['They approach her', 'They love her', 'They fear her and flee', 'They ignore her'], correctIndex: 2, explanation: '"Cervi eam timent et fugiunt."' }
    ],
    vocabulary: [
      { id: 'v22-1', latin: 'dea', english: 'goddess', partOfSpeech: 'noun' },
      { id: 'v22-2', latin: 'arcus', english: 'bow', partOfSpeech: 'noun' },
      { id: 'v22-3', latin: 'sagitta', english: 'arrow', partOfSpeech: 'noun' },
      { id: 'v22-4', latin: 'semper', english: 'always', partOfSpeech: 'adverb' },
      { id: 'v22-5', latin: 'venor', english: 'I hunt', partOfSpeech: 'verb' },
      { id: 'v22-6', latin: 'nympha', english: 'nymph', partOfSpeech: 'noun' },
      { id: 'v22-7', latin: 'cervus', english: 'deer, stag', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Roman mythology'
  },

  {
    id: 'passage-23-via-romana',
    title: 'Via Romana',
    latin:
      'Romani vias multas per Italiam construunt. Viae longae et latae sunt. Milites in viis celeriter ambulant. Mercatores merces per vias portant. Omnes viae Romam ducunt.',
    sentences: [
      { latin: 'Romani vias multas per Italiam construunt.', english: 'The Romans build many roads throughout Italy.' },
      { latin: 'Viae longae et latae sunt.', english: 'The roads are long and wide.' },
      { latin: 'Milites in viis celeriter ambulant.', english: 'Soldiers walk quickly on the roads.' },
      { latin: 'Mercatores merces per vias portant.', english: 'Merchants carry goods along the roads.' },
      { latin: 'Omnes viae Romam ducunt.', english: 'All roads lead to Rome.' }
    ],
    questions: [
      { id: 'q23-1', prompt: 'What do the Romans build throughout Italy?', choices: ['Temples', 'Many roads', 'Schools', 'Forts'], correctIndex: 1, explanation: '"Romani vias multas per Italiam construunt."' },
      { id: 'q23-2', prompt: 'What are the roads like?', choices: ['Short and narrow', 'Long and wide', 'Rocky and steep', 'Old and broken'], correctIndex: 1, explanation: '"Viae longae et latae sunt."' },
      { id: 'q23-3', prompt: 'How do soldiers travel on the roads?', choices: ['Slowly', 'By wagon', 'Quickly on foot', 'On horseback'], correctIndex: 2, explanation: '"Milites in viis celeriter ambulant."' },
      { id: 'q23-4', prompt: 'What famous saying ends the passage?', choices: ['"Rome was not built in a day"', '"All roads lead to Rome"', '"When in Rome, do as the Romans"', '"Rome stands forever"'], correctIndex: 1, explanation: '"Omnes viae Romam ducunt."' }
    ],
    vocabulary: [
      { id: 'v23-1', latin: 'construo', english: 'I build, I construct', partOfSpeech: 'verb' },
      { id: 'v23-2', latin: 'latus', english: 'wide, broad', partOfSpeech: 'adjective' },
      { id: 'v23-3', latin: 'celeriter', english: 'quickly, swiftly', partOfSpeech: 'adverb' },
      { id: 'v23-4', latin: 'duco', english: 'I lead', partOfSpeech: 'verb' },
      { id: 'v23-5', latin: 'per', english: 'through, along', partOfSpeech: 'preposition' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-24-templum-deorum',
    title: 'Templum Deorum',
    latin:
      'Romani multa templa deorum habent. Templa in urbibus et in agris sunt. Cives ad templum veniunt et deis orant. Sacerdotes sacrificia faciunt. Dei Romanos servant.',
    sentences: [
      { latin: 'Romani multa templa deorum habent.', english: 'The Romans have many temples of the gods.' },
      { latin: 'Templa in urbibus et in agris sunt.', english: 'Temples are in cities and in the countryside.' },
      { latin: 'Cives ad templum veniunt et deis orant.', english: 'Citizens come to the temple and pray to the gods.' },
      { latin: 'Sacerdotes sacrificia faciunt.', english: 'Priests perform sacrifices.' },
      { latin: 'Dei Romanos servant.', english: 'The gods protect the Romans.' }
    ],
    questions: [
      { id: 'q24-1', prompt: 'Where are Roman temples located?', choices: ['Only in cities', 'Only in the countryside', 'In cities and the countryside', 'Only near rivers'], correctIndex: 2, explanation: '"Templa in urbibus et in agris sunt."' },
      { id: 'q24-2', prompt: 'What do citizens do at the temple?', choices: ['Buy goods', 'Pray to the gods', 'Listen to speeches', 'Have dinner'], correctIndex: 1, explanation: '"Cives ad templum veniunt et deis orant."' },
      { id: 'q24-3', prompt: 'What do priests do?', choices: ['Teach students', 'Perform sacrifices', 'Guard the city', 'Build temples'], correctIndex: 1, explanation: '"Sacerdotes sacrificia faciunt."' },
      { id: 'q24-4', prompt: 'What do the gods do for the Romans?', choices: ['Teach them', 'Fight for them', 'Protect them', 'Feed them'], correctIndex: 2, explanation: '"Dei Romanos servant."' }
    ],
    vocabulary: [
      { id: 'v24-1', latin: 'deus', english: 'god', partOfSpeech: 'noun' },
      { id: 'v24-2', latin: 'oro', english: 'I pray, I beg', partOfSpeech: 'verb' },
      { id: 'v24-3', latin: 'sacerdos', english: 'priest', partOfSpeech: 'noun' },
      { id: 'v24-4', latin: 'sacrificium', english: 'sacrifice', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-25-caupona',
    title: 'Viator et Caupona',
    latin:
      'Viator fessus per longam viam ambulat. Ad cauponam venit et intrat. Caupo ei cibum et vinum dat. Viator cenat et quiescit. Mane surgit, cauponem salutat, et iter facit.',
    sentences: [
      { latin: 'Viator fessus per longam viam ambulat.', english: 'A tired traveler walks along a long road.' },
      { latin: 'Ad cauponam venit et intrat.', english: 'He comes to an inn and enters.' },
      { latin: 'Caupo ei cibum et vinum dat.', english: 'The innkeeper gives him food and wine.' },
      { latin: 'Viator cenat et quiescit.', english: 'The traveler dines and rests.' },
      { latin: 'Mane surgit, cauponem salutat, et iter facit.', english: 'In the morning he gets up, greets the innkeeper, and continues his journey.' }
    ],
    questions: [
      { id: 'q25-1', prompt: 'How is the traveler described?', choices: ['Happy and wealthy', 'Young and strong', 'Tired', 'Angry and hungry'], correctIndex: 2, explanation: '"Viator fessus..."' },
      { id: 'q25-2', prompt: 'What does the innkeeper give the traveler?', choices: ['A bed only', 'Money and directions', 'Food and wine', 'Water and bread'], correctIndex: 2, explanation: '"Caupo ei cibum et vinum dat."' },
      { id: 'q25-3', prompt: 'What does the traveler do at the inn?', choices: ['Works and sleeps', 'Dines and rests', 'Reads and sings', 'Buys goods'], correctIndex: 1, explanation: '"Viator cenat et quiescit."' },
      { id: 'q25-4', prompt: 'What does the traveler do in the morning?', choices: ['Stays another day', 'Gets up, greets the innkeeper, and continues his journey', 'Eats a big breakfast only', 'Pays and immediately leaves'], correctIndex: 1, explanation: '"Mane surgit, cauponem salutat, et iter facit."' }
    ],
    vocabulary: [
      { id: 'v25-1', latin: 'viator', english: 'traveler, wayfarer', partOfSpeech: 'noun' },
      { id: 'v25-2', latin: 'fessus', english: 'tired, weary', partOfSpeech: 'adjective' },
      { id: 'v25-3', latin: 'caupona', english: 'inn, tavern', partOfSpeech: 'noun' },
      { id: 'v25-4', latin: 'caupo', english: 'innkeeper', partOfSpeech: 'noun' },
      { id: 'v25-5', latin: 'quiesco', english: 'I rest, I am quiet', partOfSpeech: 'verb' },
      { id: 'v25-6', latin: 'saluto', english: 'I greet', partOfSpeech: 'verb' },
      { id: 'v25-7', latin: 'iter', english: 'journey, road', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-26-cornelia-liberi',
    title: 'Cornelia et Liberi',
    latin:
      'Cornelia mater Romana clara est. Duos filios et duas filias habet. Liberos suos docet et amat. Liberi Corneliae studiosi et boni sunt. Cornelia optima mater est.',
    sentences: [
      { latin: 'Cornelia mater Romana clara est.', english: 'Cornelia is a famous Roman mother.' },
      { latin: 'Duos filios et duas filias habet.', english: 'She has two sons and two daughters.' },
      { latin: 'Liberos suos docet et amat.', english: 'She teaches and loves her children.' },
      { latin: 'Liberi Corneliae studiosi et boni sunt.', english: 'Cornelia\'s children are studious and good.' },
      { latin: 'Cornelia optima mater est.', english: 'Cornelia is the best mother.' }
    ],
    questions: [
      { id: 'q26-1', prompt: 'How is Cornelia described?', choices: ['A poor Roman woman', 'A famous Roman mother', 'A Roman queen', 'A Roman teacher'], correctIndex: 1, explanation: '"Cornelia mater Romana clara est."' },
      { id: 'q26-2', prompt: 'How many children does Cornelia have?', choices: ['Two sons only', 'Two daughters only', 'Four children total (two sons and two daughters)', 'Three sons'], correctIndex: 2, explanation: '"Duos filios et duas filias habet."' },
      { id: 'q26-3', prompt: 'What does Cornelia do for her children?', choices: ['Feeds and clothes them', 'Teaches and loves them', 'Sends them away to school', 'Works to earn money for them'], correctIndex: 1, explanation: '"Liberos suos docet et amat."' },
      { id: 'q26-4', prompt: 'What are Cornelia\'s children like?', choices: ['Lazy and naughty', 'Studious and good', 'Quiet and shy', 'Loud and playful'], correctIndex: 1, explanation: '"Liberi Corneliae studiosi et boni sunt."' }
    ],
    vocabulary: [
      { id: 'v26-1', latin: 'mater', english: 'mother', partOfSpeech: 'noun' },
      { id: 'v26-2', latin: 'clarus', english: 'famous, bright, clear', partOfSpeech: 'adjective' },
      { id: 'v26-3', latin: 'liberi', english: 'children (freeborn)', partOfSpeech: 'noun' },
      { id: 'v26-4', latin: 'filia', english: 'daughter', partOfSpeech: 'noun' },
      { id: 'v26-5', latin: 'studiosus', english: 'studious, eager', partOfSpeech: 'adjective' },
      { id: 'v26-6', latin: 'optimus', english: 'best, very good', partOfSpeech: 'adjective' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Roman history'
  },

  {
    id: 'passage-27-tempora-anni',
    title: 'De Temporibus Anni',
    latin:
      'Quattuor anni tempora sunt: ver, aestas, autumnus, hiems. In vere flores florent et aves cantant. In aestate sol ardet et pueri in aquā ludunt. In autumno folia de arboribus cadunt. In hieme nix cadit.',
    sentences: [
      { latin: 'Quattuor anni tempora sunt: ver, aestas, autumnus, hiems.', english: 'There are four seasons of the year: spring, summer, autumn, winter.' },
      { latin: 'In vere flores florent et aves cantant.', english: 'In spring flowers bloom and birds sing.' },
      { latin: 'In aestate sol ardet et pueri in aquā ludunt.', english: 'In summer the sun blazes and boys play in the water.' },
      { latin: 'In autumno folia de arboribus cadunt.', english: 'In autumn leaves fall from the trees.' },
      { latin: 'In hieme nix cadit.', english: 'In winter snow falls.' }
    ],
    questions: [
      { id: 'q27-1', prompt: 'How many seasons are there?', choices: ['Two', 'Three', 'Four', 'Five'], correctIndex: 2, explanation: '"Quattuor anni tempora sunt."' },
      { id: 'q27-2', prompt: 'What happens in spring?', choices: ['Snow falls', 'Flowers bloom and birds sing', 'Leaves fall', 'Boys play in water'], correctIndex: 1, explanation: '"In vere flores florent et aves cantant."' },
      { id: 'q27-3', prompt: 'What do boys do in summer?', choices: ['Study indoors', 'Play in the water', 'Gather leaves', 'Build snowmen'], correctIndex: 1, explanation: '"pueri in aquā ludunt."' },
      { id: 'q27-4', prompt: 'What happens in autumn?', choices: ['Flowers bloom', 'Snow falls', 'Leaves fall from trees', 'Birds arrive'], correctIndex: 2, explanation: '"In autumno folia de arboribus cadunt."' }
    ],
    vocabulary: [
      { id: 'v27-1', latin: 'tempus', english: 'time, season', partOfSpeech: 'noun' },
      { id: 'v27-2', latin: 'ver', english: 'spring', partOfSpeech: 'noun' },
      { id: 'v27-3', latin: 'autumnus', english: 'autumn, fall', partOfSpeech: 'noun' },
      { id: 'v27-4', latin: 'flos', english: 'flower', partOfSpeech: 'noun' },
      { id: 'v27-5', latin: 'floreo', english: 'I bloom, I flourish', partOfSpeech: 'verb' },
      { id: 'v27-6', latin: 'avis', english: 'bird', partOfSpeech: 'noun' },
      { id: 'v27-7', latin: 'ardeo', english: 'I blaze, I burn', partOfSpeech: 'verb' },
      { id: 'v27-8', latin: 'folium', english: 'leaf', partOfSpeech: 'noun' },
      { id: 'v27-9', latin: 'nix', english: 'snow', partOfSpeech: 'noun' }
    ],
    difficulty: 'beginner',
    source: 'Composed for beginners'
  },

  {
    id: 'passage-28-cervus-fons',
    title: 'Cervus et Fons',
    latin:
      'Cervus ad fontem venit et aquam bibit. In aquā imaginem suam videt. Cornua sua magna et pulchra sunt. Crura autem parva et tenua videntur. Cervus cornibus gloriatur.',
    sentences: [
      { latin: 'Cervus ad fontem venit et aquam bibit.', english: 'A stag comes to a spring and drinks water.' },
      { latin: 'In aquā imaginem suam videt.', english: 'In the water he sees his own reflection.' },
      { latin: 'Cornua sua magna et pulchra sunt.', english: 'His antlers are large and beautiful.' },
      { latin: 'Crura autem parva et tenua videntur.', english: 'His legs, however, seem small and thin.' },
      { latin: 'Cervus cornibus gloriatur.', english: 'The stag boasts about his antlers.' }
    ],
    questions: [
      { id: 'q28-1', prompt: 'What does the stag do at the spring?', choices: ['Sleeps', 'Drinks water and sees his reflection', 'Meets other animals', 'Eats grass'], correctIndex: 1, explanation: '"Cervus ad fontem venit et aquam bibit. In aquā imaginem suam videt."' },
      { id: 'q28-2', prompt: 'How are the stag\'s antlers described?', choices: ['Small and ugly', 'Large and beautiful', 'Broken and old', 'Thin and weak'], correctIndex: 1, explanation: '"Cornua sua magna et pulchra sunt."' },
      { id: 'q28-3', prompt: 'How do his legs seem?', choices: ['Long and strong', 'Beautiful and graceful', 'Small and thin', 'Fast and powerful'], correctIndex: 2, explanation: '"Crura autem parva et tenua videntur."' },
      { id: 'q28-4', prompt: 'What does the stag boast about?', choices: ['His speed', 'His size', 'His antlers', 'His strength'], correctIndex: 2, explanation: '"Cervus cornibus gloriatur."' }
    ],
    vocabulary: [
      { id: 'v28-1', latin: 'fons', english: 'spring, fountain, source', partOfSpeech: 'noun' },
      { id: 'v28-2', latin: 'imago', english: 'image, reflection', partOfSpeech: 'noun' },
      { id: 'v28-3', latin: 'cornu', english: 'horn, antler', partOfSpeech: 'noun' },
      { id: 'v28-4', latin: 'crus', english: 'leg', partOfSpeech: 'noun' },
      { id: 'v28-5', latin: 'autem', english: 'however, but', partOfSpeech: 'conjunction' },
      { id: 'v28-6', latin: 'tenuis', english: 'thin, slender', partOfSpeech: 'adjective' },
      { id: 'v28-7', latin: 'glorior', english: 'I boast, I take pride in', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Aesop'
  },

  {
    id: 'passage-29-asinus-leo',
    title: 'Asinus et Leo',
    latin:
      'Asinus in agro herbam edit. Leo asinum videt et petit. Asinus leonem videt et timet. Celeriter currit et in silvam fugit. Asinus tutus est et deos gratias agit.',
    sentences: [
      { latin: 'Asinus in agro herbam edit.', english: 'A donkey eats grass in the field.' },
      { latin: 'Leo asinum videt et petit.', english: 'A lion sees the donkey and pursues him.' },
      { latin: 'Asinus leonem videt et timet.', english: 'The donkey sees the lion and is afraid.' },
      { latin: 'Celeriter currit et in silvam fugit.', english: 'He runs quickly and flees into the forest.' },
      { latin: 'Asinus tutus est et deos gratias agit.', english: 'The donkey is safe and gives thanks to the gods.' }
    ],
    questions: [
      { id: 'q29-1', prompt: 'What is the donkey doing at the start?', choices: ['Sleeping', 'Running', 'Eating grass', 'Drinking water'], correctIndex: 2, explanation: '"Asinus in agro herbam edit."' },
      { id: 'q29-2', prompt: 'What does the lion do when he sees the donkey?', choices: ['Ignores him', 'Pursues him', 'Roars at him', 'Sleeps nearby'], correctIndex: 1, explanation: '"Leo asinum videt et petit."' },
      { id: 'q29-3', prompt: 'Where does the donkey flee?', choices: ['Into the city', 'Into a river', 'Into the forest', 'Into a cave'], correctIndex: 2, explanation: '"in silvam fugit."' },
      { id: 'q29-4', prompt: 'What does the donkey do after he is safe?', choices: ['Goes back to the field', 'Sleeps', 'Thanks the gods', 'Calls for help'], correctIndex: 2, explanation: '"Asinus tutus est et deos gratias agit."' }
    ],
    vocabulary: [
      { id: 'v29-1', latin: 'asinus', english: 'donkey, ass', partOfSpeech: 'noun' },
      { id: 'v29-2', latin: 'herba', english: 'grass, herb', partOfSpeech: 'noun' },
      { id: 'v29-3', latin: 'leo', english: 'lion', partOfSpeech: 'noun' },
      { id: 'v29-4', latin: 'peto', english: 'I seek, I pursue, I attack', partOfSpeech: 'verb' },
      { id: 'v29-5', latin: 'curro', english: 'I run', partOfSpeech: 'verb' },
      { id: 'v29-6', latin: 'tutus', english: 'safe', partOfSpeech: 'adjective' },
      { id: 'v29-7', latin: 'gratias ago', english: 'I give thanks', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Aesop'
  },

  {
    id: 'passage-30-prometheus-ignis',
    title: 'Prometheus et Ignis',
    latin:
      'Olim homines ignem non habebant. Prometheus homines amabat et eis auxilium dare cupiebat. Ignem de caelo tulit et hominibus dedit. Homines laeti erant et Prometheum laudabant. Prometheus homines servavit.',
    sentences: [
      { latin: 'Olim homines ignem non habebant.', english: 'Once upon a time people did not have fire.' },
      { latin: 'Prometheus homines amabat et eis auxilium dare cupiebat.', english: 'Prometheus loved people and wanted to give them help.' },
      { latin: 'Ignem de caelo tulit et hominibus dedit.', english: 'He took fire from the sky and gave it to people.' },
      { latin: 'Homines laeti erant et Prometheum laudabant.', english: 'The people were happy and praised Prometheus.' },
      { latin: 'Prometheus homines servavit.', english: 'Prometheus saved humankind.' }
    ],
    questions: [
      { id: 'q30-1', prompt: 'What did people lack at the start of the story?', choices: ['Water', 'Food', 'Fire', 'Shelter'], correctIndex: 2, explanation: '"homines ignem non habebant."' },
      { id: 'q30-2', prompt: 'Why did Prometheus want to help people?', choices: ['He was bored', 'He loved people', 'The gods ordered him to', 'He wanted to be famous'], correctIndex: 1, explanation: '"Prometheus homines amabat et eis auxilium dare cupiebat."' },
      { id: 'q30-3', prompt: 'Where did Prometheus get the fire?', choices: ['From the earth', 'From the sea', 'From the sky', 'From a volcano'], correctIndex: 2, explanation: '"Ignem de caelo tulit."' },
      { id: 'q30-4', prompt: 'How did people react to receiving fire?', choices: ['They were afraid', 'They were angry', 'They were happy and praised Prometheus', 'They returned it to the gods'], correctIndex: 2, explanation: '"Homines laeti erant et Prometheum laudabant."' }
    ],
    vocabulary: [
      { id: 'v30-1', latin: 'olim', english: 'once, once upon a time', partOfSpeech: 'adverb' },
      { id: 'v30-2', latin: 'ignis', english: 'fire', partOfSpeech: 'noun' },
      { id: 'v30-3', latin: 'Prometheus', english: 'Prometheus (a Titan)', partOfSpeech: 'noun' },
      { id: 'v30-4', latin: 'fero', english: 'I carry, I bring, I take', partOfSpeech: 'verb' },
      { id: 'v30-5', latin: 'servo', english: 'I save, I protect', partOfSpeech: 'verb' }
    ],
    difficulty: 'beginner',
    source: 'Adapted from Greek mythology'
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
