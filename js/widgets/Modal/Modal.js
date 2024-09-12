import { Button } from '../../ui/index.js';
import { Title } from '../../ui/index.js';
import { Form } from '../../features/index.js';
import { IconClose } from '../../ui/icons/index.js';

/**
 * @typedef {import('./types').ModalData} ModalData
 */

/**
 * @function Modal
 * @param {ModalData} data
 * @returns {string} HTML
 */

export const Modal = (data) => `
  <div class="modal" id="modal">
    <div class="modal__body">
      <!-- Close -->
      ${Button(IconClose(), 'modal__close', 'order-close')}
      <!-- Title -->
      ${Title(data.title, 'modal__title')}
      <!-- Form -->
      ${Form(data)}
    </div>
  </div>
`;
