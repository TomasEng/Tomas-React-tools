import React, {useEffect, useReducer} from 'react';
import {allUnits, DimensionName, Unit} from 'enheter';
import style from './UnitSelector.module.css';
import {Select, SingleSelectOption} from '@digdir/design-system-react';
import {unitPrefixes} from '../../data/unitPrefixes';
import {prefixAsString, UnitSelectorActionType, unitSelectorReducer, UnitSelectorState} from './UnitSelectorReducer';

export interface UnitSelectorProps {
  dimension: DimensionName;
  onChange?: (unit: Unit) => void;
  textFn: (unit: Unit) => string;
}

export const UnitSelector = ({
                               dimension,
                               onChange,
                               textFn = (unit: Unit) => unit.key || '',
                             }: UnitSelectorProps) => {

  const {units} = allUnits[dimension];

  const reducerCallback = (state: UnitSelectorState) => onChange && onChange(state.unit);

  const [state, dispatch] = useReducer(
    unitSelectorReducer(reducerCallback),
    {unit: Object.values(units)[0].baseUnit}
  );

  useEffect(() => {
    dispatch({
      type: UnitSelectorActionType.INITIALIZE_UNIT,
      dimension,
    });
  }, [dimension, units]);

  const setUnit = (unitKey: string) => dispatch({type: UnitSelectorActionType.SET_UNIT, unitKey});
  const setPrefix = (prefix: string) => dispatch({type: UnitSelectorActionType.SET_PREFIX, prefix});

  const prefixlessUnits = Object.values(units).filter((unit) => !unit.prefix);
  const options: SingleSelectOption[] = prefixlessUnits.map((unit) => ({
    label: textFn(unit),
    value: unit.key,
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
        value={state.unit.key}
      />
    </span>
  </span>;
};