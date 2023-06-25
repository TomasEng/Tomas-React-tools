import React, {useCallback, useMemo} from 'react';
import {findUnitFromUnitKeys, matchingUnitsWithPrefix, orderSearchResults} from '../../utils/unitUtils';
import {UnitKeywords, UnitPrefixKeywords, UnitPrefixTextFn, UnitTextFn} from '../../types';
import {Combobox} from '../Combobox';
import {createComboboxItem} from './createComboboxItem';
import {Unit} from 'enheter';
import {UnitOrPrefixSearchResultItem} from '../../classes';
import style from './UnitSearch.module.css';

export type UnitSearchProps = {
  onChange?: (unit: Unit) => void;
  placeholder?: string;
  prefixKeywords: UnitPrefixKeywords;
  unitKeywords: UnitKeywords;
  unitPrefixTextFn: UnitPrefixTextFn;
  unitTextFn: UnitTextFn;
  value?: Unit;
};

export const UnitSearch = ({
                             onChange,
                             placeholder,
                             prefixKeywords,
                             unitKeywords,
                             unitPrefixTextFn,
                             unitTextFn,
                             value,
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

  const selected = useMemo(
    () => value
      ? createComboboxItem(UnitOrPrefixSearchResultItem.fromUnit(value), unitTextFn, unitPrefixTextFn)
      : undefined,
    [unitPrefixTextFn, unitTextFn, value]
  );

  return (
    <Combobox
      onChange={handleChange}
      placeholder={placeholder}
      searchResult={searchResult}
      selectedClassName={style.selected}
      value={selected}
    />
  );
}