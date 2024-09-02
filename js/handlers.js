import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';

/**
* @typedef {import('../js/widgets/Clients/types').BrandData} BrandData
*/

/**
 *@function handleThemeClick
 * @param {Event} event
 * @param {BrandData[]} brandsData
 */

export const handleThemeClick = (event, brandsData) => {
  const $root = document.querySelector('#root');

  /** @type {NodeListOf<HTMLImageElement>} */
  const $brands = document.querySelectorAll('[data-id="brand"]');

  /** @type { * | EventTarget } */
  const $themeButton = event.currentTarget;
  const theme = $themeButton?.dataset.theme;

  if (theme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = IconSun();
    $root?.classList.remove('light');
    $root?.classList.add('dark');
    $brands.forEach((brand, index) => {
      brand.src = brandsData[index].logo.darkSource;
    });
  };

  if (theme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = IconMoon();
    $root?.classList.remove('dark');
    $root?.classList.add('light');
    $brands.forEach((brand, index) => {
      brand.src = brandsData[index].logo.lightSource;
    });
  };
};
