/**
 * @typedef {import('./types').SelectItemData} SelectItemData
 */

/**
 * @function Select
 * @param {SelectItemData[]} selectList
 * @param {string} id
 * @returns {string} HTML
 */

export const Select = (selectList, id) => `
  <select id="${id}">
    ${selectList.map((selectItem) => `
      <option value="${selectItem.key}">${selectItem.name}</option>
    `)}
  </select>
`;
