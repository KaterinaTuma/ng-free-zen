import { IconIn } from '../Icons/IconIn/index.js';

/**
* @typedef {import('../Column/types').ItemData} ItemData
*/

/**
 *@function ColumnItem
 * @param {ItemData} linkData
 */

export const ColumnItem = (linkData) => {
  const { url, content } = linkData;
  const { type, data } = content;

  if (type === 'text') return `<a href="${url}">${data}</a>`;
  if (type === 'email') return `<a href="${url}">${data}</a>`;
  if (type === 'image') return `<a href="${url}">${IconIn()}</a>`;

  return '';
};
