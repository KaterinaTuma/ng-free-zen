import { Header } from './widgets/Header/index.js';
import { Download } from './widgets/Download/index.js';
import { Warranty } from './widgets/Warranty/index.js';
import { Care } from './widgets/Care/index.js';
import { Cashback } from './widgets/Cashback/index.js';
import { Clients } from './widgets/Clients/index.js';
import { Footer } from './widgets/Footer/index.js';
import { Modal } from './widgets/Modal/index.js';
import { dataFromAPI } from './dataFromAPI.js';
import { onThemeClick } from './handlers.js';
import { toggleNavigation } from './handlers.js';
import { handleNavLinkClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(dataFromAPI.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(dataFromAPI.download));
$root?.insertAdjacentHTML('beforeend', Warranty(dataFromAPI.warranty));
$root?.insertAdjacentHTML('beforeend', Care(dataFromAPI.care));
$root?.insertAdjacentHTML('beforeend', Cashback(dataFromAPI.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(dataFromAPI.clients));
$root?.insertAdjacentHTML('beforeend', Footer(dataFromAPI.secondaryInfo));
$root?.insertAdjacentHTML('beforeend', Modal(dataFromAPI.modal));

const $themeButton = document.querySelector('#theme');
$themeButton?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));

const $burgerButton = document.querySelector('#burger');
$burgerButton?.addEventListener('click', () => toggleNavigation());

const $navLinks = document.querySelectorAll('[data-id="nav-link"]');
$navLinks.forEach(($navLink) => $navLink.addEventListener('click', handleNavLinkClick));
