import { Link } from '../Link/index.js';

/**
* @typedef {import('./types').ColumnData} ColumnData
*/

/**
* @function Column
* @param {ColumnData} data
* @returns {string} HTML
*/

export const Column = (data) => {
  const { name, links } = data;

  return `
    <div class="column">
      <h3 class="column__title">
        ${name}
      </h3>
      <ul class="column__list">
        ${links.map((link) => `
          <li class="column__item">
            ${Link(link)}
          </li>
        `).join('')}
      </ul>
    </div>
  `;
};
