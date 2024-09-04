import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';

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
 * @function handleBurgerClick
 * @param {Event} event
 */

export const handleBurgerClick = (event) => {
  const $burgerButton = /** @type {HTMLElement | null} */ (event.currentTarget);
  const $nav = document.querySelector('#nav');

  if (!$burgerButton || !$nav) return;

  $nav.classList.toggle('active');
  $burgerButton.classList.toggle('active');
};
