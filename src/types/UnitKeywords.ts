import {DimensionName, UnitName} from 'enheter';

export type UnitKeywords = {
  [D in DimensionName]: {
    [U in UnitName<D>]: string[];
  }
};