import React, {useEffect, useState} from 'react';
import {Select, SingleSelectOption, TextField} from '@digdir/design-system-react';
import type {DimensionName} from 'enheter';
import {allUnits} from 'enheter';
import '@altinn/figma-design-tokens/dist/tokens.css';
import style from './UnitInput.module.css';
import {UnitTextFn} from '../../types';

export interface UnitInputProps<T extends DimensionName> {
  dimension: T;
  textFn: UnitTextFn;
}

export const UnitInput = <T extends DimensionName>({dimension, textFn}: UnitInputProps<T>) => {
  const {units} = allUnits[dimension];
  const [value, setValue] = useState<number>(1);
  const [unit, setUnit] = useState<string>(Object.values(units)[0].baseUnit.key);
  useEffect(() => {
    setUnit(Object.values(units)[0].baseUnit.key);
  }, [dimension, units]);
  const options: SingleSelectOption[] = Object.values(units).map((unit) => ({
    label: textFn(unit),
    value: unit.key,
  }));
  return <span className={style.unitInput}>
    <span>
      <TextField
        formatting={{number: {}, align: 'right'}}
        onChange={(e) => setValue(Number(e.target.value))}
        value={value.toString()}
      />
    </span>
    <span>
      <Select
        options={options}
        onChange={setUnit}
        value={unit}
      />
    </span>
  </span>;
}