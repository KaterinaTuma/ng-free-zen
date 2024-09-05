/**
 * @typedef {import('./types').NavItemData} NavItemData
 */

/**
 * @function Navigation
 * @param {NavItemData[]} navList
 * @returns {string} HTML
 */

export const Navigation = (navList) => `
  <ul class="nav" id="nav">
    ${navList.map((navItem) => `
      <li class="nav__item" data-id="nav-link">
        <a href="#${navItem.key}">
          ${navItem.name}
        </a>
      </li>
    `).join('')}
  </ul>
`;
