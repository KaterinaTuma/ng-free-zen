import { App } from './app/index.js';
import { addHandlers } from './addHandlers.js';

export const API_URL = 'https://ng-pro-zen-default-rtdb.europe-west1.firebasedatabase.app/.json';
const $root = document.querySelector('#root');

fetch(API_URL)
  .then((response) => response.json())
  .then((responseData) => {
    if ($root) $root.innerHTML = App(responseData.en);
    addHandlers(responseData.en);
  })
  .catch((error) => console.error('Failed to fetch data:', error));
