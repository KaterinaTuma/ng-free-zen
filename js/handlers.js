import { IconSun } from './ui/icons/index.js';
import { IconMoon } from './ui/icons/index.js';
import { scrollToTarget } from './utils/scrollToTarget/index.js';

/**
 * @typedef {import('./widgets/Clients/types').BrandData} BrandFromAPI
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
 * @function toggleNavigation
 */

export const toggleNavigation = () => {
  const $nav = document.querySelector('#nav');
  const $burgerButton = document.querySelector('#burger');

  if (!$nav || !$burgerButton) return;

  $nav.classList.toggle('active');
  $burgerButton.classList.toggle('active');
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
