type ContendData = {
  type: string;
  data: string;
}

export type ItemData = {
  url: string;
  content: ContendData;
}

export type ColumnData = {
  name: string;
  links: ItemData[];
}
