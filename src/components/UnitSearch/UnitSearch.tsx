import React, {useCallback, useMemo} from 'react';
import {findUnitFromUnitKeys} from '../../utils/unitUtils';
import {UnitKeywords, UnitPrefixKeywords, UnitPrefixTextFn, UnitTextFn} from '../../types';
import {Combobox} from '../Combobox';
import {createComboboxItem} from './createComboboxItem';
import {Unit} from 'enheter';
import {UnitOrPrefixSearchResultItem} from '../../classes';
import style from './UnitSearch.module.css';
import {searchResultFunction} from './searchResultFunction';
import {UnitDimensionText} from '../../types/UnitDimensionText';

export type UnitSearchProps = {
  dimensionText: UnitDimensionText;
  maxNumberOfResults?: number;
  onChange?: (unit: Unit) => void;
  placeholder?: string;
  prefixKeywords: UnitPrefixKeywords;
  unitKeywords: UnitKeywords;
  unitPrefixTextFn: UnitPrefixTextFn;
  unitTextFn: UnitTextFn;
  value?: Unit;
};

export const UnitSearch = ({
                             dimensionText,
                             maxNumberOfResults = 12,
                             onChange,
                             placeholder,
                             prefixKeywords,
                             unitKeywords,
                             unitPrefixTextFn,
                             unitTextFn,
                             value,
                           }: UnitSearchProps) => {

  const searchResult = useCallback(
    (keyword: string) => searchResultFunction(unitKeywords, prefixKeywords, unitTextFn, unitPrefixTextFn, dimensionText, maxNumberOfResults)(keyword),
    [unitKeywords, prefixKeywords, unitTextFn, maxNumberOfResults, unitPrefixTextFn]
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
      ? createComboboxItem(UnitOrPrefixSearchResultItem.fromUnit(value), unitTextFn, unitPrefixTextFn, dimensionText)
      : undefined,
    [unitPrefixTextFn, unitTextFn, value]
  );

  return (
    <Combobox
      onChange={handleChange}
      openOnFocus
      placeholder={placeholder}
      searchResult={searchResult}
      selectedClassName={style.selected}
      value={selected}
    />
  );
}