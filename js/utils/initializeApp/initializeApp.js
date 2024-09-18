import { API_BASE_URL } from '../../config.js';
import { App } from '../../app/index.js';
import { addHandlers } from '../../addHandlers.js';

/**
 * @function initializeApp
 * @param {string} currentLang
 * @returns {Promise<void>}
 */

export const initializeApp = async (currentLang) => {
  const response = await fetch(`${API_BASE_URL}/${currentLang}.json`);
  const responseData = await response.json();

  const $root = document.querySelector('#root');

  if ($root) $root.innerHTML = App(responseData);
  addHandlers(responseData);
};
