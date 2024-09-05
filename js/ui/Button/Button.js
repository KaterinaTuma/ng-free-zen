/**
 * @function Button
 * @param {string} text
 * @param {string} className
 * @param {string} id
 * @returns {string} HTML
 */

export const Button = (text, className, type, id) => `
  <button class="${className}"
    type="${type}"
    id="${id}"
  >
    ${text}
  </button>
`;
