type BrandLogoData = {
  lightSource: string;
  darkSource: string;
}

type BrandData = {
  name: string;
  logo: BrandLogoData;
}

export type ClientsData = {
  brands: BrandData[];
}
