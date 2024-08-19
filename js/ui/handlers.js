import { $app } from '../index.js';
import { generateSunIcon } from './generateSunIcon.js';
import { generateMoonIcon } from './generateMoonIcon.js';

export const handleThemeButtonClick = (event) => {
  const $themeButton = event.currentTarget;
  const theme = $themeButton.dataset.theme;

  if (theme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = generateSunIcon();
    $app.classList.remove('light');
    $app.classList.add('dark');
  };

  if (theme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = generateMoonIcon();
    $app.classList.remove('dark');
    $app.classList.add('light');
  };
};
