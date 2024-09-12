import { App } from './app/index.js';
import { addHandlers } from './addHandlers.js';

const $root = document.querySelector('#root');

fetch('https://ng-pro-zen-default-rtdb.europe-west1.firebasedatabase.app/.json')
  .then((response) => response.json())
  .then((responseData) => {
    const dataFromAPI = responseData.en;

    $root?.insertAdjacentHTML('beforeend', App(dataFromAPI));

    addHandlers(dataFromAPI);
  });
