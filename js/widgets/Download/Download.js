import { Title } from '../../ui/index.js';
import { Link } from '../../ui/index.js';
import { Image } from '../../ui/index.js';

/**
 * @typedef {import('./types').DownloadData} DownloadData
 */

/**
 * @function Download
 * @param {DownloadData} data
 * @returns {string} HTML
 */

export const Download = (data) => {
  const { title, texts, links, image } = data;

  return `
    <section class="download" id="download">
      <div class="download__wrapper">
        <div class="download__text-block">
          <!-- Title -->
          ${Title(title, 'download__title')}
          <!-- Texts -->
          ${texts.map((text) => `<p class="download__copy">${text}</p>`).join('')}
          <!-- Links -->
          <div class="download__links">
            ${links.map((link) => Link(link, 'download__link')).join('')}
          </div>
        </div>
        <div class="download__image-block">
          ${Image(image)}
        </div>
      </div>
    </section>
  `;
};
