import {DimensionName, UnitName} from 'enheter';

export interface UnitKeys<D extends DimensionName> {
  dimensionKey: D,
  unitKey: UnitName<D>,
}