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
