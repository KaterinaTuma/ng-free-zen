import { Input } from '../Input/index.js';
import { Select } from '../Select/index.js';
import { Policy } from '../Policy/index.js';
import { Button } from '../../ui/Button/index.js';

/**
 * @typedef {import('../../widgets/Modal/types').ModalData} ModalData
 */

/**
 * @function Form
 * @param {ModalData} data
 * @returns {string} HTML
 */

export const Form = (data) => {
  const { fields, policy, connection, buttonText } = data;

  return `
    <form class="form" id="order">
      <!-- InputFields -->
      ${fields.map((field) => Input(field)).join('')}
      <!-- Connection -->
      <label class="form__field">
        <span>Connection</span>
        ${Select(connection, 'connection')}
      </label>
      <!-- Privacy policy -->
      ${Policy(policy)}
      <!-- Submit -->
      ${Button(buttonText, 'form__submit', '')}
    </form>
  `;
};
