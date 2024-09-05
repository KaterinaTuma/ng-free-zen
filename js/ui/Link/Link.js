import { IconApple } from '../Icons/IconApple/IconApple.js';
import { IconGoogle } from '../Icons/IconGoogle/IconGoogle.js';
import { IconIn } from '../Icons/IconIn/index.js';

/**
 * @typedef {import('./types').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} linkData
 * @param {string} className
 */

export const Link = (linkData, className = '') => {
  const { name, url, type, content } = linkData;
  const iconMap = {
    apple: IconApple(),
    google: IconGoogle(),
    in: IconIn(),
  };

  return `
    <a class="${className}" href="${url}">
      ${type === 'image' ? iconMap[name] : content}
    </a>
  `;
};
