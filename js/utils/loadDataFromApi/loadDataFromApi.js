import { toCapitalize } from '../index.js';

/**
 * @typedef {import('../../types.js').AppData} AppData
 */

/**
 * @function loadDataFromAPI
 * @param {string} lang
 * @return {Promise<AppData|null>}
 */

export const loadDataFromAPI = async (lang) => {
  try {
    const moduleName = `data${toCapitalize(lang)}`;
    const module = await import(`../../api/${moduleName}.js`);
    return module[moduleName];
  } catch (error) {
    console.error(`Failed to load data`, error);
    return null;
  }
};
