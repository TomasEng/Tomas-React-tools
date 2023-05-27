import React, {useCallback, useState} from 'react';
import {Button, Popover} from '@digdir/design-system-react';
import {UnitSelector} from '../UnitSelector';
import {UnitTextFn} from '../../types';
import {allUnits, DimensionName, Unit} from 'enheter';

export interface UnitSelectorButtonProps {
  dimension: DimensionName;
  textFn: UnitTextFn;
}

export const UnitSelectorButton = ({
                                     dimension,
                                     textFn
                                   }: UnitSelectorButtonProps) => {
  const defaultUnit = useCallback(() => Object.values(allUnits[dimension].units)[0].baseUnit, [dimension]);
  const [selectedUnit, setSelectedUnit] = useState<Unit>(defaultUnit);
  return (
    <Popover
      trigger={<Button title={textFn(selectedUnit)}>{selectedUnit.symbol}</Button>}
      placement='top'
    >
      <UnitSelector
        dimension={dimension}
        onChange={setSelectedUnit}
        selectedUnit={selectedUnit}
        textFn={textFn}
      />
    </Popover>
  );
}