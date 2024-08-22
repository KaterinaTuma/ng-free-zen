/**
 * @typedef {import('./types').ImageData} ImageData
 */

/**
 * @function Image
 * @param {ImageData} data
 * @returns {string} HTML
 */

export const Image = (data) => `
  <img
    src="${data.source}"
    alt="${data.description}"
  />
`;
