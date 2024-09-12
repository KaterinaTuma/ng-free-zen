import { dataEn as dataFromAPI } from './api/index.js';
import { App } from './app/index.js';
import { addHandlers } from './addHandlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataFromAPI));

addHandlers(dataFromAPI);
