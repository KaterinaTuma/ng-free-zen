import { generateWarranty } from './genetateWarranty.js';

export const updateWarranty = () => {
  const $warranty = document.querySelector('#warranty');
  $warranty.innerHTML=generateWarranty();
}
