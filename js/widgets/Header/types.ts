import { NavItemData } from '../../features/Navigation/types';
import { LangData } from '../../features/Lang/types';

export type HeaderData = {
  langs: LangData[];
  navigation: NavItemData[];
};
