import React, {useMemo, useReducer} from 'react';
import {TextField} from '@digdir/design-system-react';
import {Measure} from 'enheter';
import '@altinn/figma-design-tokens/dist/tokens.css';
import style from './UnitInput.module.css';
import {UnitSearch, UnitSearchProps} from '../UnitSearch';
import {UnitInputActionType, unitInputReducer} from './UnitInputReducer';
import {useUpdate} from '../../hooks/useUpdate';

export type UnitInputProps = Omit<UnitSearchProps, 'onChange' | 'value' | 'placeholder'> & {
  searchPlaceholder?: string;
  value?: Measure;
  onChange?: (measure?: Measure) => void;
};

export const UnitInput = ({searchPlaceholder, value, onChange, ...rest}: UnitInputProps) => {

  const initialValue = useMemo(() => {
    if (value) {
      return {
        unit: value.unit,
        measure: value,
        number: value.value,
      };
    } else {
      return {
        unit: undefined,
        measure: undefined,
        number: undefined,
      };
    }
  }, [value]);

  const [state, dispatch] = useReducer(unitInputReducer, initialValue);

  useUpdate(() => {
    onChange && onChange(state.measure);
  }, [state]);

  return <span className={style.unitInput}>
    <span>
      <TextField
        formatting={{number: {}, align: 'right'}}
        onChange={(e) => dispatch({type: UnitInputActionType.SetNumber, number: Number(e.target.value)})}
        value={state.number?.toString() ?? undefined}
      />
    </span>
    <UnitSearch
      value={state.unit ?? undefined}
      onChange={(unit) => dispatch({type: UnitInputActionType.SetUnit, unit})}
      placeholder={searchPlaceholder}
      {...rest}
    />
  </span>;
}