import { API_BASE_URL } from '../../config.js';

/**
 * @typedef {import('./types').AppDataFromAPI} DataFromAPI
 * @typedef {import('./types').ErrorData} ErrorData
 */

/**
 * @function getData
 * @param {string} lang
 * @returns {Promise<DataFromAPI | null>}
 */

export const getData = async (lang) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${lang}.json`);
    if (!response.ok) throw new Error();
    return response.json();
  } catch (/** @type {*} */ error) {
    return null;
  }
};
