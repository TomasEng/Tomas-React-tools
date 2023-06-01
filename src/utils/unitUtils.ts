import {allUnits, DimensionName, findDimensionName, Unit, UnitName} from 'enheter';
import {unitDimensions} from '../data/unitDimensions';
import {UnitKeywords, UnitPrefixKeywords} from '../types';
import {matchArray} from './arrayUtils';
import {containsAllCharsInOrder} from './stringUtils';
import {Prefix} from 'enheter/lib/Prefix';

export const initializeUnit = (dimension: DimensionName, unit?: Unit) => {
  const validUnits = allUnits[dimension].units;
  const validUnitsArray = Object.values(validUnits);
  if (!validUnitsArray.length) throw new Error(`No valid units for dimension ${dimension}`);
  const defaultUnit = validUnitsArray[0].baseUnit;
  if (!unit || findDimensionName(unit.dimension) !== dimension) return defaultUnit;
  else return unit;
}

export const unitNamesOfDimension = <D extends DimensionName>(dimension: D): UnitName<D>[] => {
  const units = allUnits[dimension].units;
  return Object.keys(units) as UnitName<D>[];
}

export const matchingUnits = (
  keyword: string,
  unitKeywords: UnitKeywords,
  dimensions: DimensionName[] = unitDimensions
): Unit[] => {
  const matchingUnits: Unit[] = [];
  for (const dimension of dimensions) {
    const unitNames = unitNamesOfDimension(dimension);
    for (const unitName of unitNames) {
      // @ts-ignore
      const keywords = unitKeywords[dimension][unitName];
      // @ts-ignore
      const unit = allUnits[dimension].units[unitName];
      if (matchArray(keywords, keyword) || containsAllCharsInOrder(keyword, unit.symbol)) {
        // @ts-ignore
        matchingUnits.push(unit);
      }
    }
  }
  return matchingUnits;
}

export const matchingPrefixes = (keyword: string, prefixKeywords: UnitPrefixKeywords): Prefix[] =>
  Object.keys(prefixKeywords).filter(prefix => matchArray(prefixKeywords[prefix], keyword));