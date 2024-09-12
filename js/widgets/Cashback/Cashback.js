import { Title } from '../../ui/index.js';
import { Button } from '../../ui/index.js';

/**
* @typedef {import('./types').CashbackData} CashbackData
*/

/**
* @function Cashback
* @param {CashbackData} data
* @returns {string} HTML
*/

export const Cashback = (data) => {
  const { title, texts, buttonText } = data;

  return `
    <section class="cashback" id="cashback">
      <div class="cashback__wrapper">
        <div class="cashback__text-block">
          <!-- Title -->
          ${Title(title, 'cashback__title')}
          <!-- Texts -->
          ${texts.map((text) => `<p class="cashback__copy">${text}</p>`).join('')}
          <!-- Button -->
          ${Button(buttonText, 'cashback__button', 'order-open')}
        </div>
      </div>
    </section>
  `;
};
