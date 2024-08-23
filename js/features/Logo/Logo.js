import { IconLogo } from '../../ui/Icons/IconLogo/index.js';

/**
 * @function Logo
 * @param {string} className
 * @returns {string} HTML
 */

export const Logo = (className) => `
  <button class="${className}"
    type="button"
    id="logo"
  >
    ${IconLogo()}
  </button>
`;
