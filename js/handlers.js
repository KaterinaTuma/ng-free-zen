import { IconSun } from './ui/icons/index.js';
import { IconMoon } from './ui/icons/index.js';
import { scrollToTarget } from './utils/index.js';
import { toggleNavigation } from './utils/index.js';
import { loadDataFromAPI } from './utils/index.js';
import { App } from './app/index.js';
import { addHandlers } from './addHandlers.js';
import { API_URL } from './index.js';

/**
 * @typedef {import('./types').BrandData} BrandFromAPI
 */

/**
 * @function onThemeClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /** @type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  const $themeButton = /** @type {HTMLElement | null} */ (event.currentTarget);
  /** @type {HTMLElement | null} */
  const $root = document.querySelector('#root');

  if (!$brandNodes || !$themeButton || !$root) return;

  const currentTheme = $themeButton.dataset.theme;

  if (currentTheme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = IconSun();
    $root.dataset.theme = 'dark';
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darkSource;
    });
  };

  if (currentTheme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = IconMoon();
    $root.dataset.theme = 'light';
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.lightSource;
    });
  };
};

/**
 * @function handleNavLinkClick
 * @param {Event} event
 * @returns {void}
 */

export const handleNavLinkClick = (event) => {
  event.preventDefault();
  const targetId = /** @type {HTMLAnchorElement} */ (event.target).hash;
  if (!targetId) return;
  scrollToTarget(targetId);
  toggleNavigation();
};

/**
 * @function handleLogoClick
 * @return {void}
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * @function handleOrderOpenClick
 * @return {void}
 */

export const handleOrderOpenClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.add('active');
};

/**
 * @function handleOrderCloseClick
 * @return {void}
 */

export const handleOrderCloseClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.remove('active');
};

/**
 * @function handleLangChange
 * @param {Event} event
 * @return {void}
 */

export const handleLangChange = (event) => {
  const currentLang = /** @type {HTMLSelectElement} */ (event?.target).value;
  const $root = document.querySelector('#root');

  if (!$root) return;

  fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      $root.innerHTML = App(responseData[currentLang]);
      addHandlers(responseData[currentLang]);
    })
    .catch((error) => console.error('Failed to update language:', error));
};
