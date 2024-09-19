import { API_BASE_URL } from '../../config.js';
import { App } from '../../app/index.js';
import { addHandlers } from '../../addHandlers.js';
import { Preloader } from '../../ui/index.js';

/**
 * @function updateApp
 * @param {string} lang
 * @returns {Promise<void>}
 */

export const updateApp = async (lang) => {
  const $root = document.querySelector('#root');

  if (!$root) return;

  $root.innerHTML = Preloader();

  const response = await fetch(`${API_BASE_URL}/${lang}.json`);
  const responseData = await response.json();

  if ($root) $root.innerHTML = App(responseData);
  addHandlers(responseData);
};
