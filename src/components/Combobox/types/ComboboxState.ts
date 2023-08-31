import {ComboboxItem} from './ComboboxItem';

export interface ComboboxState {
  isOpen: boolean;
  inputValue: string;
  activeIndex: number | null;
  selectedItem: ComboboxItem | null;
  isInWriteMode: boolean;
}