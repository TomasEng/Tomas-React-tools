import React, {useCallback, useState} from 'react';
import {Button, Popover} from '@digdir/design-system-react';
import {UnitSelector} from '../UnitSelector';
import {UnitTextFn} from '../../types';
import {allUnits, DimensionName, Unit} from 'enheter';

export interface UnitSelectorButtonProps<D extends DimensionName> {
  dimension: D;
  textFn: UnitTextFn;
}

export const UnitSelectorButton = <D extends DimensionName>({
                                                              dimension,
                                                              textFn
                                                            }: UnitSelectorButtonProps<D>) => {
  const defaultUnit = useCallback(() => Object.values(allUnits[dimension].units)[0].baseUnit, [dimension]);
  const [selectedUnit, setSelectedUnit] = useState<Unit>(defaultUnit);
  return (
    <Popover
      trigger={<Button title={textFn(selectedUnit)}>{selectedUnit.symbol}</Button>}
      placement='top'
    >
      <UnitSelector<D>
        dimension={dimension}
        onChange={setSelectedUnit}
        selectedUnit={selectedUnit}
        textFn={textFn}
      />
    </Popover>
  );
}