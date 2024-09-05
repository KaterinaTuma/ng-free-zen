import { Select } from '../../features/Select/index.js';

/**
 * @typedef {import('./types').LangData} LangData
 */

/**
 * @function Lang
 * @param {LangData[]} data
 * @returns {string} HTML
 */

export const Lang = (data) => `
  ${Select(data, 'lang')}
`;
