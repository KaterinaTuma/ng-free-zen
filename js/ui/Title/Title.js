/**
 * @typedef {import('./types').TitleData} TitleData
 */

/**
 * @function Title
 * @param {TitleData} data
 * @param {string} className
 * @returns {string} HTML
 */

export const Title = (data, className) => {
  switch (data.priority) {
    case 6: return `<h6 class="${className}">${data.content}</h6>`;
    case 5: return `<h5 class="${className}">${data.content}</h5>`;
    case 4: return `<h4 class="${className}">${data.content}</h4>`;
    case 3: return `<h3 class="${className}">${data.content}</h3>`;
    case 2: return `<h2 class="${className}">${data.content}</h2>`;
    default: return `<h1 class="${className}">${data.content}</h1>`;
  };
};
