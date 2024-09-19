import { API_BASE_URL } from '../../config.js';

/**
 * @function getData
 * @param {string} lang
 * @returns {Promise<Object>}
 */

export const getData = async (lang) => {
  const response = await fetch(`${API_BASE_URL}/${lang}.json`);
  return response.json();
};
