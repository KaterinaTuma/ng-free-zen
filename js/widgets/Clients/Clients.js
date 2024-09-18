/**
* @typedef {import('./types').ClientsData} ClientsData
*/

/**
* @function Clients
* @param {ClientsData} data
* @returns {string}
*/

export const Clients = (data) => {
  const { brands } = data;
  const currentTheme = localStorage.getItem('currentTheme');
  const logoSource = currentTheme === 'dark' ? 'darkSource' : 'lightSource';

  return `
    <section class="clients" id="clients">
      <div class="clients__wrapper">
        <ul class="clients__brands" id="brands">
          ${brands.map((brand) => `
            <li class="clients__brand">
              <img src="${brand.logo[logoSource]}"
                alt="${brand.name}"
                data-id="brand"
              />
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
};
