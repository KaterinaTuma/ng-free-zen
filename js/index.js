import { Header } from './widgets/Header/Header.js';
import { Download } from './widgets/Download/Download.js';
import { Warranty } from './widgets/Warranty/Warranty.js';
import { Care } from './widgets/Care/Care.js';
import { Cashback } from './widgets/Cashback/Cashback.js';
import { Clients } from './widgets/Clients/Clients.js';
import { Footer } from './widgets/Footer/Footer.js';
import { dataFromAPI } from './dataFromAPI.js';
import { onThemeClick } from './handlers.js';
import { handleBurgerClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(dataFromAPI.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(dataFromAPI.download));
$root?.insertAdjacentHTML('beforeend', Warranty(dataFromAPI.warranty));
$root?.insertAdjacentHTML('beforeend', Care(dataFromAPI.care));
$root?.insertAdjacentHTML('beforeend', Cashback(dataFromAPI.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(dataFromAPI.clients));
$root?.insertAdjacentHTML('beforeend', Footer(dataFromAPI.secondaryInfo));

const $themeButton = document.querySelector('#theme');
$themeButton?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));

const $burgerButton = document.querySelector('#burger');
$burgerButton?.addEventListener('click', handleBurgerClick);
