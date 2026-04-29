/**
 * Conjugation and declension charts data
 * To be populated by the team with actual Latin verb conjugations and noun declensions
 */

import type { Chart } from '../types';

/**
 * Sample chart structure for demonstration.
 * Future charts will follow this interface.
 */
export const charts: Chart[] = [
  // Charts will be added here
];

export function getChartById(id: string): Chart | undefined {
  return charts.find((chart) => chart.id === id);
}

export function getChartsByCategory(
  category: 'verb' | 'noun'
): Chart[] {
  // Filter by category once charts are populated
  return [];
}
