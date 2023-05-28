import React, {useReducer} from 'react';
import {allUnits, DimensionName, findUnitName, Unit} from 'enheter';
import style from './UnitSelector.module.css';
import {Select, SingleSelectOption} from '@digdir/design-system-react';
import {unitPrefixes} from '../../data/unitPrefixes';
import {prefixAsString, UnitSelectorActionType, unitSelectorReducer, UnitSelectorState} from './UnitSelectorReducer';
import {UnitTextFn} from '../../types';
import {useUpdate} from '../../hooks/useUpdate';
import {initializeUnit} from '../../utils/unitUtils';

export interface UnitSelectorProps {
  dimension: DimensionName;
  onChange?: (unit: Unit) => void;
  prefixText?: string;
  selectedUnit?: Unit;
  textFn: UnitTextFn;
  unitText?: string;
}

export const UnitSelector = ({
                               dimension,
                               onChange,
                               prefixText = 'Prefix',
                               selectedUnit,
                               textFn = (unit: Unit) => unit.key || '',
                               unitText = 'Unit',
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
  }, [dimension, selectedUnit]);

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
        label={prefixText}
        options={prefixOptions}
        onChange={setPrefix}
        value={prefixAsString(state.unit.prefix)}
      />
    </span>
    <span className={style.unitSelector}>
      <Select
        label={unitText}
        options={options}
        onChange={setUnit}
        value={findUnitName(state.unit.withPrefix(null))}
      />
    </span>
  </span>;
};