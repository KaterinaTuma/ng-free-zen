/**
 * @function Button
 * @param {string} content
 * @param {string} className
 * @param {string} id
 * @returns {string} HTML
 */

export const Button = (content, className, id) => `
  <button class="${className}"
    type="button"
    id="${id}"
  >
    ${content}
  </button>
`;
