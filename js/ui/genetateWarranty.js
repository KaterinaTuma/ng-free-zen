import { warranty } from '../data.js';

export const generateWarranty = () => {
  return `
    <div class="warranty__wrapper">
      <div class="warranty__text-block">
        <h2 class="warranty__title">${warranty.title}</h2>
        ${warranty.texts.map(text => {
          return `<p class="warranty__copy">${text}</p>`
      }).join("")}
      </div>
      <div class="warranty__image-block">
        <img src="${warranty.image.sourse}" alt="${warranty.image.description}" />
      </div>
    </div>
`;
};
