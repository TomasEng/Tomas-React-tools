import React, {useCallback} from 'react';
import {matchingUnitsWithPrefix} from '../../utils/unitUtils';
import {UnitKeywords, UnitPrefixKeywords, UnitTextFn} from '../../types';
import {Combobox} from '../Combobox';

export type UnitSearchProps = {
  unitKeywords: UnitKeywords;
  prefixKeywords: UnitPrefixKeywords;
  unitTextFn: UnitTextFn;
  placeholder?: string;
};

export const UnitSearch = ({
                             unitKeywords,
                             prefixKeywords,
                             unitTextFn,
                             placeholder,
                           }: UnitSearchProps) => {
  const searchResult = useCallback(
    (keyword: string) => matchingUnitsWithPrefix(keyword, unitKeywords, prefixKeywords).map(it => it.comboboxItem(unitTextFn)),
    [prefixKeywords, unitKeywords, unitTextFn]
  );

  return (
    <Combobox searchResult={searchResult} placeholder={placeholder}/>
  );
}