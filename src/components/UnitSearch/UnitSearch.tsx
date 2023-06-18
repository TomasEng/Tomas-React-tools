import React, {useCallback} from 'react';
import {matchingUnitsWithPrefix, orderSearchResults} from '../../utils/unitUtils';
import {UnitKeywords, UnitPrefixKeywords, UnitPrefixTextFn, UnitTextFn} from '../../types';
import {Combobox} from '../Combobox';
import {createComboboxItem} from './createComboboxItem';

export type UnitSearchProps = {
  placeholder?: string;
  prefixKeywords: UnitPrefixKeywords;
  unitKeywords: UnitKeywords;
  unitPrefixTextFn: UnitPrefixTextFn;
  unitTextFn: UnitTextFn;
};

export const UnitSearch = ({
                             placeholder,
                             prefixKeywords,
                             unitKeywords,
                             unitPrefixTextFn,
                             unitTextFn,
                           }: UnitSearchProps) => {
  const searchResult = useCallback(
    (keyword: string) => orderSearchResults(
      matchingUnitsWithPrefix(keyword, unitKeywords, prefixKeywords),
      keyword,
      unitKeywords,
      prefixKeywords,
      unitTextFn,
    ).map(it => createComboboxItem(it, unitTextFn, unitPrefixTextFn)),
    [prefixKeywords, unitKeywords, unitTextFn, unitPrefixTextFn]
  );
  return (
    <Combobox searchResult={searchResult} placeholder={placeholder}/>
  );
}