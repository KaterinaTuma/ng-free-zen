/**
 * @function scrollToTarget
 * @param {string} targetId
 * @returns {void}
 */

export const scrollToTarget = (targetId) => {
  const $targetElement = document.querySelector(targetId);
  /** @type {HTMLElement | null} */
  const $header = document.querySelector('#header');
  const headerHeight = $header?.offsetHeight || 0;

  if (!$targetElement) return;

  const targetPosition =
    $targetElement.getBoundingClientRect().top +
    window.scrollY -
    headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
};

/**
 * @function toggleModal
 * @returns {void}
 */

export const toggleModal = () => {
  const $modal = document.querySelector('#modal');
  if (!$modal) return;
  $modal.classList.toggle('active');
};

/**
 * @function toggleNavigation
 * @returns {void}
 */

export const toggleNavigation = () => {
  const $nav = document.querySelector('#nav');
  const $burgerButton = document.querySelector('#burger');

  if (!$nav || !$burgerButton) return;

  $nav.classList.toggle('active');
  $burgerButton.classList.toggle('active');
};
