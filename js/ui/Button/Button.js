/**
 * @function Button
 * @param {string} text
 * @param {string} className
 * @param {string} id
 * @returns {string} HTML
 */

export const Button = (text, className, id) => `
  <button class="${className}"
    type="button"
    id="${id}"
  >
    ${text}
  </button>
`;
