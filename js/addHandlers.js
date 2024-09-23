import { handleNavLinkClick } from './handlers.js';
import { handleLogoClick } from './handlers.js';
import { handleOrderOpenClick } from './handlers.js';
import { handleOrderCloseClick } from './handlers.js';
import { onThemeClick } from './handlers.js';
import { toggleNavigation } from './utils/index.js';
import { handleLangChange } from './handlers.js';

/**
 * @typedef {import('./types').AppDataFromAPI} AppDataFromAPI
 */

/**
 * @function addHandlers
 * @param {AppDataFromAPI} dataFromAPI
 * @returns {void}
 */

export const addHandlers = (dataFromAPI) => {
  const $themeButton = document.querySelector('#theme');
  $themeButton?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));

  const $burgerButton = document.querySelector('#burger');
  $burgerButton?.addEventListener('click', () => toggleNavigation());

  const $navLinks = document.querySelectorAll('[data-id="nav-link"]');
  $navLinks.forEach(($navLink) => $navLink.addEventListener('click', handleNavLinkClick));

  const $logo = document.querySelector('#logo');
  $logo?.addEventListener('click', handleLogoClick);

  const $orderOpenButton = document.querySelector('#order-open');
  $orderOpenButton?.addEventListener('click', handleOrderOpenClick);

  const $orderCloseButton = document.querySelector('#order-close');
  $orderCloseButton?.addEventListener('click', handleOrderCloseClick);

  const $lang = document.querySelector('#lang');
  $lang?.addEventListener('change', handleLangChange);
};
