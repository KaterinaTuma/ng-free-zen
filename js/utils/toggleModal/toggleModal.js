/**
 * @function toggleModal
 * @returns {void}
 */

export const toggleModal = () => {
  const $modal = document.querySelector('#modal');
  if (!$modal) return;
  $modal.classList.toggle('active');
};
