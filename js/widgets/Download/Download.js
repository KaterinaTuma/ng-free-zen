import { Title } from '../../ui/Title/Title.js';
import { Link } from '../../ui/Link/Link.js';
import { Image } from '../../ui/Image/Image.js';

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
          ${Title(title, 'download__title')}
          ${texts.map((text) => `<p class="download__copy">${text}</p>`).join('')}
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
