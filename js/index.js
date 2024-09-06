import { dataFromAPI } from './dataFromAPI.js';
import { Header } from './widgets/Header/index.js';
import { Download } from './widgets/Download/index.js';
import { Warranty } from './widgets/Warranty/index.js';
import { Care } from './widgets/Care/index.js';
import { Cashback } from './widgets/Cashback/index.js';
import { Clients } from './widgets/Clients/index.js';
import { Footer } from './widgets/Footer/index.js';
import { Modal } from './widgets/Modal/index.js';
import { onThemeClick } from './handlers.js';
import { handleNavLinkClick } from './handlers.js';
import { handleLogoClick } from './handlers.js';
import { handleOrderOpenClick } from './handlers.js';
import { handleOrderCloseClick } from './handlers.js';
import { toggleNavigation } from './utils/index.js';

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

const $logo = document.querySelector('#logo');
$logo?.addEventListener('click', handleLogoClick);

const $orderOpenButton = document.querySelector('#order-open');
$orderOpenButton?.addEventListener('click', handleOrderOpenClick);

const $orderCloseButton = document.querySelector('#order-close');
$orderCloseButton?.addEventListener('click', handleOrderCloseClick);
