import { IconApple } from '../icons/index.js';
import { IconGoogle } from '../icons/index.js';
import { IconIn } from '../icons/index.js';
import { IconDeveloper } from '../icons/index.js';

/**
 * @typedef {import('./types').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} linkData
 * @param {string} className
 */

export const Link = (linkData, className = '') => {
  const { name, url, type } = linkData;
  const iconMap = {
    apple: IconApple(),
    google: IconGoogle(),
    in: IconIn(),
    developer: IconDeveloper(),
  };

  return `
    <a class="${className}" href="${url}">
      ${type === 'image' ? iconMap[name] : name}
    </a>
  `;
};
