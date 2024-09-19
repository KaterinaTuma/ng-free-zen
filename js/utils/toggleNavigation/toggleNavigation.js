/**
 * @function toggleNavigation
 * @returns {void}
 */

export const toggleNavigation = () => {
  if (window.innerWidth >= 1152) return;

  const $nav = document.querySelector('#nav');
  const $burgerButton = document.querySelector('#burger');

  if (!$nav || !$burgerButton) return;

  $nav.classList.toggle('active');
  $burgerButton.classList.toggle('active');
};
