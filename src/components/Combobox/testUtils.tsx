import {countries} from '../../test-data/countries';
import style from './Combobox.stories.module.css';
import React from 'react';
import {ComboboxItem} from './types/ComboboxItem';

export const searchResult = (input: string) => countries
  .filter((item: ComboboxItem) => item.value.toLowerCase().includes(input.toLowerCase()))
  .map((item: ComboboxItem) => ({
    ...item,
    label: <span className={style.item}>{item.label}</span>
  }));