import React, {useEffect, useState} from 'react';
import {TextField} from '@digdir/design-system-react';
import {Unit} from 'enheter';
import '@altinn/figma-design-tokens/dist/tokens.css';
import style from './UnitInput.module.css';
import {UnitSelectorButton, UnitSelectorButtonProps} from '../UnitSelectorButton';
import {initializeUnit} from '../../utils/unitUtils';

export type UnitInputProps = UnitSelectorButtonProps;

export const UnitInput = ({dimension, textFn, selectedUnit, unitText, prefixText, onChange}: UnitInputProps) => {
  const [value, setValue] = useState<number>(1);
  const [unit, setUnit] = useState<Unit>(initializeUnit(dimension, selectedUnit));

  useEffect(() => {
    setUnit(initializeUnit(dimension, selectedUnit));
  }, [dimension, selectedUnit]);

  useEffect(() => {
    onChange && onChange(unit);
  }, [onChange, unit]);

  return <span className={style.unitInput}>
    <span>
      <TextField
        formatting={{number: {}, align: 'right'}}
        onChange={(e) => setValue(Number(e.target.value))}
        value={value.toString()}
      />
    </span>
    <UnitSelectorButton
      dimension={dimension}
      onChange={setUnit}
      prefixText={prefixText}
      selectedUnit={unit}
      textFn={textFn}
      unitText={unitText}
    />
  </span>;
}