import { App } from '../../app/index.js';
import { Preloader } from '../../ui/index.js';
import { addHandlers } from '../../addHandlers.js';
import { getData } from '../index.js';

/**
 * @function renderApp
 * @param {string} lang
 * @returns {Promise<void>}
 */

export const renderApp = async (lang) => {
  const $root = document.querySelector('#root');

  if (!$root) return;

  $root.innerHTML = Preloader();

  const data = await getData(lang);
  if (!data) {
    $root.innerHTML = '<p>Что-то пошло не так. Повторите попытку позже.</p>';
    return;
  }

  $root.innerHTML = App(data);
  addHandlers(data);
};
