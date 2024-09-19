import { IconSun } from './ui/icons/index.js';
import { IconMoon } from './ui/icons/index.js';
import { scrollToTarget } from './utils/index.js';
import { toggleNavigation } from './utils/index.js';
import { renderApp } from './utils/index.js';

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

  const currentTheme = localStorage.getItem('currentTheme');

  if (currentTheme === 'light') {
    $themeButton.innerHTML = IconSun();
    $root.classList.remove('light');
    $root.classList.add('dark');
    localStorage.setItem('currentTheme', 'dark');
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darkSource;
    });
  };

  if (currentTheme === 'dark') {
    $themeButton.innerHTML = IconMoon();
    $root.classList.remove('dark');
    $root.classList.add('light');
    localStorage.setItem('currentTheme', 'light');
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
  localStorage.setItem('currentLang', currentLang);
  renderApp(currentLang);
};
