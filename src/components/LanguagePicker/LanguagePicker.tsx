import React from 'react';
import {LanguageWithCountry} from '../../types/LanguageWithCountry';
import {languagesWithCountry} from '../../data/languagesWithCountry';
import {Combobox} from '../Combobox';
import {LanguageItem} from './LanguageItem';
import {sortLanguagesByMatch} from '../../utils/languageUtils';

export interface LanguagePickerProps {
  languages?: LanguageWithCountry[];
}

export const LanguagePicker = ({languages}: LanguagePickerProps) => {
  const languageList: LanguageWithCountry[] = languages || languagesWithCountry as LanguageWithCountry[];
  return (
    <Combobox searchResult={(search) => sortLanguagesByMatch(languageList, search).map(language => ({
      value: language,
      label: <LanguageItem language={language}/>,
    }))}/>
  );
};