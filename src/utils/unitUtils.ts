import {allUnits, DimensionName, findDimensionName, Unit} from 'enheter';

export const initializeUnit = (dimension: DimensionName, unit?: Unit) => {
  const validUnits = allUnits[dimension].units;
  const validUnitsArray = Object.values(validUnits);
  if (!validUnitsArray.length) throw new Error(`No valid units for dimension ${dimension}`);
  const defaultUnit = validUnitsArray[0].baseUnit;
  if (!unit || findDimensionName(unit.dimension) !== dimension) return defaultUnit;
  else return unit;
}