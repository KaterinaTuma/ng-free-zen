import { IconMoon } from '../../ui/icons/index.js';
import { IconSun } from '../../ui/icons/index.js';

/**
 * @function Theme
 * @param {string} className
 * @returns {string} HTML
 */

export const Theme = (className) => {
  const currentTheme = localStorage.getItem('currentTheme');

  return `
    <button class="${className}"
      type="button"
      id="theme"
    >
      ${currentTheme === 'dark' ? IconSun() : IconMoon()}
    </button>
  `;
};
