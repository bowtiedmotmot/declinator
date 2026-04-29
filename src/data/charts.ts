/**
 * Conjugation and declension charts data
 * Contains three example charts for drilling Latin conjugations and declensions
 */

import type { Chart } from '../types';

/**
 * First Conjugation Present Active: amō, amāre
 * Shows present active indicative forms in singular and plural
 */
const amoConjugation: Chart = {
  id: 'amo-pres-act',
  name: 'amō (1st Conjugation Present Active)',
  description: 'Present active indicative of 1st conjugation verb amō, amāre (to love)',
  rows: ['1st Person', '2nd Person', '3rd Person'],
  cols: ['Singular', 'Plural'],
  answers: {
    'row_0_col_0': 'amo', // 1st sg
    'row_0_col_1': 'amamus', // 1st pl
    'row_1_col_0': 'amas', // 2nd sg
    'row_1_col_1': 'amatis', // 2nd pl
    'row_2_col_0': 'amat', // 3rd sg
    'row_2_col_1': 'amant', // 3rd pl
  },
};

/**
 * Second Declension Masculine: servus, servī
 * Shows all cases in singular and plural
 */
const servusNoun: Chart = {
  id: 'servus-2nd-masc',
  name: 'servus (2nd Declension Masculine)',
  description: 'All cases of 2nd declension masculine noun servus, servī (servant, slave)',
  rows: ['Nominative', 'Genitive', 'Dative', 'Accusative', 'Ablative', 'Vocative'],
  cols: ['Singular', 'Plural'],
  answers: {
    'row_0_col_0': 'servus', // nom sg
    'row_0_col_1': 'servi', // nom pl
    'row_1_col_0': 'servi', // gen sg
    'row_1_col_1': 'servorum', // gen pl
    'row_2_col_0': 'servo', // dat sg
    'row_2_col_1': 'servis', // dat pl
    'row_3_col_0': 'servum', // acc sg
    'row_3_col_1': 'servos', // acc pl
    'row_4_col_0': 'servo', // abl sg
    'row_4_col_1': 'servis', // abl pl
    'row_5_col_0': 'serve', // voc sg
    'row_5_col_1': 'servi', // voc pl
  },
};

/**
 * First Declension Feminine: puella, puellae
 * Shows all cases in singular and plural
 */
const puellaNoun: Chart = {
  id: 'puella-1st-fem',
  name: 'puella (1st Declension Feminine)',
  description: 'All cases of 1st declension feminine noun puella, puellae (girl, daughter)',
  rows: ['Nominative', 'Genitive', 'Dative', 'Accusative', 'Ablative', 'Vocative'],
  cols: ['Singular', 'Plural'],
  answers: {
    'row_0_col_0': 'puella', // nom sg
    'row_0_col_1': 'puellae', // nom pl
    'row_1_col_0': 'puellae', // gen sg
    'row_1_col_1': 'puellarum', // gen pl
    'row_2_col_0': 'puellae', // dat sg
    'row_2_col_1': 'puellis', // dat pl
    'row_3_col_0': 'puellam', // acc sg
    'row_3_col_1': 'puellas', // acc pl
    'row_4_col_0': 'puella', // abl sg
    'row_4_col_1': 'puellis', // abl pl
    'row_5_col_0': 'puella', // voc sg
    'row_5_col_1': 'puellae', // voc pl
  },
};

export const charts: Chart[] = [amoConjugation, servusNoun, puellaNoun];

export function getChartById(id: string): Chart | undefined {
  return charts.find((chart) => chart.id === id);
}

export function getChartsByCategory(
  category: 'verb' | 'noun'
): Chart[] {
  // verb: conjugations, noun: declensions
  if (category === 'verb') {
    return charts.filter((c) => c.id.includes('pres'));
  }
  return charts.filter((c) => !c.id.includes('pres'));
}
