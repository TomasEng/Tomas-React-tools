import React from 'react';
import {UnitOrPrefixSearchResultItem} from '../../classes';
import {UnitPrefixTextFn, UnitTextFn} from '../../types';
import {ComboboxItem} from '../Combobox';
import {DimensionName, findDimensionName} from 'enheter';
import {findUnitFromUnitKeys} from '../../utils/unitUtils';
import {UnitPrefixItem} from '../UnitPrefixItem';
import {UnitItem} from '../UnitItem';
import {UnitDimensionText} from '../../types/UnitDimensionText';

export const createComboboxItem = (
  unitOrPrefixSearchResultItem: UnitOrPrefixSearchResultItem,
  unitTextFn: UnitTextFn,
  unitPrefixTextFn: UnitPrefixTextFn,
  dimensionText: UnitDimensionText,
): ComboboxItem => {
  let label;
  let searchString = undefined;
  if (unitOrPrefixSearchResultItem.isPrefixOnly()) {
    const prefixName = unitPrefixTextFn(unitOrPrefixSearchResultItem.prefix);
    label = <UnitPrefixItem prefix={unitOrPrefixSearchResultItem.prefix} prefixName={prefixName}/>;
    searchString = prefixName;
  } else if (!unitOrPrefixSearchResultItem.unit) {
    throw new Error('Something impossible happened.');
  } else {
    const unit = findUnitFromUnitKeys<DimensionName>(unitOrPrefixSearchResultItem.unit!);
    const prefixedUnit = unit.withPrefix(unitOrPrefixSearchResultItem.prefix);
    const {dimension, symbol} = prefixedUnit;
    const dimensionName = dimensionText[findDimensionName(dimension)!];
    label = <UnitItem name={unitTextFn(prefixedUnit)} symbol={symbol} dimension={dimensionName}/>;
  }
  return {
    value: unitOrPrefixSearchResultItem.id(),
    label,
    searchString,
  };
};