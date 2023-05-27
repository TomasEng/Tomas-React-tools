import React, {useReducer} from 'react';
import {allUnits, DimensionName, findDimensionName, findUnitName, Unit} from 'enheter';
import style from './UnitSelector.module.css';
import {Select, SingleSelectOption} from '@digdir/design-system-react';
import {unitPrefixes} from '../../data/unitPrefixes';
import {prefixAsString, UnitSelectorActionType, unitSelectorReducer, UnitSelectorState} from './UnitSelectorReducer';
import {UnitTextFn} from '../../types';
import {useUpdate} from '../../hooks/useUpdate';

export interface UnitSelectorProps {
  dimension: DimensionName;
  onChange?: (unit: Unit) => void;
  textFn: UnitTextFn;
  selectedUnit?: Unit;
}

const initializeUnit = (dimension: DimensionName, unit?: Unit) => {
  const validUnits = allUnits[dimension].units;
  const validUnitsArray = Object.values(validUnits);
  if (!validUnitsArray.length) throw new Error(`No valid units for dimension ${dimension}`);
  const defaultUnit = validUnitsArray[0].baseUnit;
  if (!unit || findDimensionName(unit.dimension) !== dimension) return defaultUnit;
  else return unit;
}

export const UnitSelector = ({
                               dimension,
                               onChange,
                               textFn = (unit: Unit) => unit.key || '',
                               selectedUnit,
                             }: UnitSelectorProps) => {

  const {units} = allUnits[dimension];

  const reducerCallback = (state: UnitSelectorState) => onChange && onChange(state.unit);

  const [state, dispatch] = useReducer(
    unitSelectorReducer(reducerCallback),
    {unit: initializeUnit(dimension, selectedUnit)}
  );

  useUpdate(() => {
    dispatch({
      type: UnitSelectorActionType.SET_UNIT,
      unit: initializeUnit(dimension, selectedUnit),
    });
  }, [dimension, units, selectedUnit]);

  const setUnit = (unitKey: string) => dispatch({type: UnitSelectorActionType.SET_UNIT_KEY, unitKey});
  const setPrefix = (prefix: string) => dispatch({type: UnitSelectorActionType.SET_PREFIX, prefix});

  const prefixlessUnits = Object.values(units).filter((unit) => !unit.prefix);
  const options: SingleSelectOption[] = prefixlessUnits.map((unit) => ({
    label: textFn(unit),
    value: findUnitName(unit) ?? '',
  }));

  const prefixOptions: SingleSelectOption[] = unitPrefixes.map((prefix) => ({
    label: prefix || '',
    value: prefix || '',
  })) as SingleSelectOption[];

  return <span className={style.root}>
    <span className={style.prefixSelector}>
      <Select
        label='Prefix'
        options={prefixOptions}
        onChange={setPrefix}
        value={prefixAsString(state.unit.prefix)}
      />
    </span>
    <span className={style.unitSelector}>
      <Select
        label='Unit'
        options={options}
        onChange={setUnit}
        value={findUnitName(state.unit.withPrefix(null))}
      />
    </span>
  </span>;
};