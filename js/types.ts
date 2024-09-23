/* Common types */
export type TitleData = {
  content: string;
  priority: number;
};

export type LinkData = {
  name: string;
  url: string;
  type: string;
};

export type ImageData = {
  source: string;
  description: string;
};

export type InputData = {
  id: string;
  type: string;
  placeholder: string;
};

export type SelectItemData = {
  name: string;
  key: string;
}

/* HeaderData */
export type NavItemData = {
  name: string;
  key: string;
};

export type HeaderData = {
  langs: SelectItemData[];
  navigation: NavItemData[];
};

/* DownloadData */
export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};

/* WarrantyData */
export type WarrantyData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
}

/* CareData */
export type CareData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
}

/* CashbackData */
export type CashbackData = {
  title: TitleData;
  texts: string[];
  buttonText: string;
}

/* ClientsData */
export type BrandLogoData = {
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

/* FooterData */
export type ColumnData = {
  name: string;
  links: LinkData[];
};

export type FooterData = {
  categories: ColumnData[];
  texts: string[];
  developer: LinkData;
}

/* ModalData */
export type PolicyData = {
  id: string;
  type: string;
  link: LinkData;
};

export type ModalData = {
  title: TitleData;
  fields: InputData[];
  policy: PolicyData;
  connection: SelectItemData[];
  buttonText: string;
};

/* AppDataFromAPI */
export type AppDataFromAPI = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: ClientsData
  secondaryInfo: FooterData;
  modal: ModalData;
}
