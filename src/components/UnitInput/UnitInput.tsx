import React, {useEffect} from 'react';
import {Select, SingleSelectOption, TextField} from '@digdir/design-system-react';
import type {DimensionName} from 'enheter';
import {allUnits, Unit} from 'enheter';
import '@altinn/figma-design-tokens/dist/tokens.css';
import style from './UnitInput.module.css';

export interface UnitInputProps<T extends DimensionName> {
  dimension: T;
  textFn: (unit: Unit) => string;
}

export const UnitInput = <T extends DimensionName>({dimension, textFn}: UnitInputProps<T>) => {
  const {units} = allUnits[dimension];
  const [value, setValue] = React.useState<number>(1);
  const [unit, setUnit] = React.useState<string>(Object.values(units)[0].baseUnit.key);
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