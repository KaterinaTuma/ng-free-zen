import { TitleData } from '../../ui/Title/types';
import { InputData } from '../../features/Input/types';
import { SelectItemData } from '../../features/Select/types';
import { PolicyData } from '../../features/Policy/types';

export type ModalData = {
  title: TitleData;
  fields: InputData[];
  policy: PolicyData;
  connection: SelectItemData[];
  buttonText: string;
};
