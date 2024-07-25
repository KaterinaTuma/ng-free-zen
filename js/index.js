import {handleThemeButtonClick} from './ui/handlers.js';
import {handleBurgerButtonClick} from './ui/handlers.js';
import { updateWarranty } from './ui/updaters.js';

export const $app = document.querySelector('#app');
const $themeButton = document.querySelector('#theme');
const $burgerButton = document.querySelector('#burger'); 

$themeButton.addEventListener('click', handleThemeButtonClick);
$burgerButton.addEventListener('click', handleBurgerButtonClick);

updateWarranty();