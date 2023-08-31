import {ComboboxItem} from './ComboboxItem';

export interface ComboboxProps {
  onChange?: (value: string) => void;
  openOnFocus?: boolean;
  placeholder?: string;
  searchResult: (input: string) => ComboboxItem[];
  selectedClassName?: string;
  value?: string | ComboboxItem;
}