import { Link } from '../../ui/Link/index.js';

/**
 * @typedef {import('./types').PolicyData} PolicyData
 */

/**
 * @function Policy
 * @param {PolicyData} data
 * @return {string} HTML
 */

export const Policy = (data) => `
  <div class="form__policy">
    <input type="${data.type}" id="${data.id}" />
    ${Link(data.link)}
  </div>
`;
