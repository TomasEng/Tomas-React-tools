import React from 'react';
import {LanguageWithCountry} from '../../types/LanguageWithCountry';
import {languagesWithCountry} from '../../data/languagesWithCountry';
import {Combobox} from '../Combobox';
import {LanguageItem} from './LanguageItem';

export interface LanguagePickerProps {
  languages?: LanguageWithCountry[];
}

export const LanguagePicker = ({languages}: LanguagePickerProps) => {
  const languageList: LanguageWithCountry[] = languages || languagesWithCountry as LanguageWithCountry[];
  return (
    <Combobox searchResult={() => languageList.map(language => ({
      value: language,
      label: <LanguageItem language={language}/>,
    }))}/>
  );
};