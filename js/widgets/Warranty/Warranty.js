import { Title } from '../../ui/index.js';
import { Image } from '../../ui/index.js';

/**
* @typedef {import('./types.js').WarrantyData} WarrantyData
*/

/**
* @function Warranty
* @param {WarrantyData} data
* @returns {string} HTML
*/

export const Warranty = (data) => {
  const { title, texts, image } = data;

  return `
    <section class="warranty" id="warranty">
      <div class="warranty__wrapper">
        <div class="warranty__text-block">
          <!-- Title -->
          ${Title(title, 'warranty__title')}
          <!-- Texts -->
          ${texts.map((text) => `<p class="warranty__copy">${text}</p>`).join('')}
        </div>
        <div class="warranty__image-block">
          ${Image(image)}
        </div>
      </div>
    </section>
  `;
};
