import React from 'react';
import {Select, SingleSelectOption, TextField} from '@digdir/design-system-react';
import type {DimensionName} from 'enheter';
import {allUnits, Unit} from 'enheter';
import '@altinn/figma-design-tokens/dist/tokens.css';

export interface UnitInputProps<T extends DimensionName> {
  dimension: T;
  textFn: (unit: Unit) => string;
}

export const UnitInput = <T extends DimensionName>({dimension, textFn}: UnitInputProps<T>) => {
  const {units} = allUnits[dimension];
  const options: SingleSelectOption[] = Object.values(units).map((unit) => ({
    label: textFn(unit),
    value: unit.key,
  }));
  return <>
    <TextField
      formatting={{number: {}}}
    />
    <Select options={options}/>
  </>;
}