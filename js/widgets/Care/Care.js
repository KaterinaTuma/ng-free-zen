import { Title } from '../../ui/index.js';
import { Image } from '../../ui/index.js';

/**
* @typedef {import('./types').CareData} CareData
*/

/**
* @function Care
* @param {CareData} data
* @returns {string} HTML
*/

export const Care = (data) => {
  const { title, texts, image } = data;

  return `
    <section class="care" id="care">
      <div class="care__wrapper">
        <div class="care__text-block">
          <!-- Title -->
          ${Title(title, 'care__title')}
          <!-- Texts -->
          ${texts.map((text) => `
            <p class="care__copy">${text}</p>
          `).join('')}
        </div>
        <div class="care__image-block">
          ${Image(image)}
        </div>
      </div>
    </section>
  `;
};
