import React from 'react';
import {LanguageCodeWithCountryCode} from '../../types/LanguageCodeWithCountryCode';
import {Combobox} from '../Combobox';
import {LanguageItem} from './LanguageItem';
import {sortLanguagesByMatch} from '../../utils/languageUtils';
import {LanguageCode} from '../../types/LanguageCode';
import {languages as allLanguages} from '../../data/languages';

export interface LanguagePickerProps {
  languages?: (LanguageCode | LanguageCodeWithCountryCode)[];
}

export const LanguagePicker = ({languages}: LanguagePickerProps) => {
  const languageList: (LanguageCode | LanguageCodeWithCountryCode)[] = languages || Object.keys(allLanguages);
  return (
    <Combobox searchResult={(search) => sortLanguagesByMatch(languageList, search).map(language => ({
      value: language as string,
      label: <LanguageItem language={language}/>,
    }))}/>
  );
};