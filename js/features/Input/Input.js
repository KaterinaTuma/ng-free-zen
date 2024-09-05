/**
 * @typedef {import('./types').InputData} InputData
 */

/**
 * @function Input
 * @param {InputData} data
 */

export const Input = (data) => {
  const { id, type, placeholder } = data;

  return `
    <label class="form__field">
      <input type="${type}" 
        placeholder="${placeholder}" 
        id="${id}" />
    </label>
  `;
};
