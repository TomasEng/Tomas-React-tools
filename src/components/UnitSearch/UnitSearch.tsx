import React, {useCallback} from 'react';
import {findUnitFromUnitKeys, matchingUnitsWithPrefix, orderSearchResults} from '../../utils/unitUtils';
import {UnitKeywords, UnitPrefixKeywords, UnitPrefixTextFn, UnitTextFn} from '../../types';
import {Combobox} from '../Combobox';
import {createComboboxItem} from './createComboboxItem';
import {Unit} from 'enheter';
import {UnitOrPrefixSearchResultItem} from '../../classes';

export type UnitSearchProps = {
  onChange?: (unit: Unit) => void;
  placeholder?: string;
  prefixKeywords: UnitPrefixKeywords;
  unitKeywords: UnitKeywords;
  unitPrefixTextFn: UnitPrefixTextFn;
  unitTextFn: UnitTextFn;
};

export const UnitSearch = ({
                             onChange,
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

  const handleChange = useCallback((value: string) => {
    const unitResult = UnitOrPrefixSearchResultItem.fromId(value);
    if (unitResult.isPrefixOnly()) {
      return;
    } else {
      const unit = findUnitFromUnitKeys(unitResult.unit!).withPrefix(unitResult.prefix);
      onChange && onChange(unit);
    }
  }, [onChange]);

  return (
    <Combobox
      onChange={handleChange}
      placeholder={placeholder}
      searchResult={searchResult}
    />
  );
}