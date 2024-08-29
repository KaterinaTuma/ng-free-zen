type BrandLogoData = {
  lightSource: string;
  darkSource: string;
}

export type BrandData = {
  name: string;
  logo: BrandLogoData;
}

export type ClientsData = {
  brands: BrandData[];
}
