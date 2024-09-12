import { Column } from '../../ui/index.js';
import { IconLogo2 } from '../../ui/icons/index.js';
import { Link } from '../../ui/index.js';

/**
* @typedef {import('./types').FooterData} FooterData
*/

/**
* @function Footer
* @param {FooterData} data
* @returns {string} HTML
*/

export const Footer = (data) => {
  const { categories, texts, developer } = data;

  return `
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${categories.map((category) => Column(category)).join('')}
        </div>
        <div class="footer__info">
          <!-- Logo -->
          <a class="footer__logo" href="#">
            ${IconLogo2()}
          </a>
          <!-- Texts -->
          ${texts.map((text) => `<p class="footer__copy">${text}</p>`).join('')}
          <!-- Developer -->
          ${Link(developer, 'footer__dev')}
        </div>
      </div>
    </footer>
  `;
};
