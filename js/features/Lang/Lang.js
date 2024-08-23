import { IconArrowDown } from '../../ui/Icons/IconArrowDown/index.js';
import { Select } from '../../ui/Select/index.js';

/**
 * @typedef {import('./types').LangData} LangData
 */

/**
 * @function Lang
 * @param {LangData[]} data
 * @returns {string} HTML
 */

export const Lang = (data) => `
  ${IconArrowDown()}
  ${Select(data, 'lang')}
`;
