import React, {useState} from 'react';
import {LanguageCodeWithCountryCode} from '../../types/LanguageCodeWithCountryCode';
import {Combobox} from '../Combobox';
import {LanguageItem} from './LanguageItem';
import {sortLanguagesByMatch} from '../../utils/languageUtils';
import {LanguageCode} from '../../types/LanguageCode';
import {languages as allLanguages} from '../../data/languages';

export interface LanguagePickerProps {
  languages?: (LanguageCode | LanguageCodeWithCountryCode)[];
  selected?: LanguageCode | LanguageCodeWithCountryCode;
  onChange?: (language: LanguageCode | LanguageCodeWithCountryCode) => void;
}

export const LanguagePicker = ({
                                 languages = [],
                                 selected: defaultSelected,
                                 onChange,
                               }: LanguagePickerProps) => {
  const [selected, setSelected] = useState(defaultSelected);
  const languageList: (LanguageCode | LanguageCodeWithCountryCode)[] = languages?.length
    ? languages
    : Object.keys(allLanguages);
  return (
    <Combobox
      searchResult={
        (search) => sortLanguagesByMatch(languageList, search)
          .map(language => ({
            value: language as string,
            label: <LanguageItem language={language}/>
          }))
      }
      onChange={(code) => {
        setSelected(code);
        onChange?.(code);
      }}
      openOnFocus
      value={selected as string | undefined}
    />
  );
};