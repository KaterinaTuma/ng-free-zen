import { data } from './data.js';
import { Download } from './widgets/Download/Download.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Download(data.download));
