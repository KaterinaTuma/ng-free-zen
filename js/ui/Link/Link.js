/**
 * @typedef {import('./types').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} data
 * @param {string} className
 * @returns {string} HTML
 */

export const Link = (data, className) => {
  return `
    <a class="${className}" href="${data.url}">
      <img src="./assets/icons/${data.name}.svg" alt="${data.name} icon" />
    </a>
  `;
};
