import { renderApp } from './utils/index.js';

const currentLang = localStorage.getItem('currentLang') ?? 'en';
const currentTheme = localStorage.getItem('currentTheme') ?? 'dark';

localStorage.setItem('currentLang', currentLang);
localStorage.setItem('currentTheme', currentTheme);

const $root = document.querySelector('#root');
$root?.classList.add(currentTheme);

renderApp(currentLang);
