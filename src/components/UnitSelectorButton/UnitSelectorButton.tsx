import React, {useEffect, useState} from 'react';
import {Button, Popover} from '@digdir/design-system-react';
import {UnitSelector, UnitSelectorProps} from '../UnitSelector';
import {initializeUnit} from '../../utils/unitUtils';

export type UnitSelectorButtonProps = UnitSelectorProps;

export const UnitSelectorButton = ({
                                     dimension,
                                     textFn,
                                     prefixText = 'Prefix',
                                     selectedUnit,
                                     unitText = 'Unit',
                                     onChange,
                                   }: UnitSelectorButtonProps) => {
  const [unit, setUnit] = useState(initializeUnit(dimension, selectedUnit));

  useEffect(() => {
    setUnit(initializeUnit(dimension, selectedUnit));
  }, [dimension, selectedUnit]);

  useEffect(() => {
    onChange && onChange(unit);
  }, [onChange, unit]);

  return (
    <Popover
      trigger={<Button title={textFn(unit)}>{unit.symbol}</Button>}
      placement='top'
    >
      <UnitSelector
        dimension={dimension}
        onChange={setUnit}
        prefixText={prefixText}
        selectedUnit={selectedUnit}
        textFn={textFn}
        unitText={unitText}
      />
    </Popover>
  );
}