import { handleThemeButtonClick } from './ui/handlers.js';

export const $app = document.querySelector('#app');
const $themeButton = document.querySelector('#theme');

$themeButton.addEventListener('click', handleThemeButtonClick);
