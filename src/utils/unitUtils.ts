import {allUnits, DimensionName, findDimensionName, Unit, UnitName} from 'enheter';
import {unitDimensions} from '../data/unitDimensions';
import {UnitKeys, UnitKeywords, UnitPrefixKeywords, UnitTextFn} from '../types';
import {matchArray} from './arrayUtils';
import {containsAllCharsInOrder} from './stringUtils';
import {Prefix} from 'enheter/lib/Prefix';
import {UnitOrPrefixSearchResultItem} from '../classes';
import {orderByKeywords} from './sortUtils';
import {compareMatch} from './compareFunctions';

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
): UnitKeys<DimensionName>[] => {
  const matchingUnits: UnitKeys<DimensionName>[] = [];
  for (const dimension of dimensions) {
    const unitNames = unitNamesOfDimension(dimension);
    for (const unitName of unitNames) {
      // @ts-ignore
      const keywords = unitKeywords[dimension][unitName];
      // @ts-ignore
      const unit = allUnits[dimension].units[unitName];
      if (matchArray(keywords, keyword) || containsAllCharsInOrder(keyword, unit.symbol)) {
        // @ts-ignore
        matchingUnits.push({
          dimensionKey: dimension,
          unitKey: unitName,
        });
      }
    }
  }
  return matchingUnits;
}

export const matchingPrefixes = (keyword: string, prefixKeywords: UnitPrefixKeywords): Prefix[] =>
  Object.keys(prefixKeywords).filter(prefix => matchArray(prefixKeywords[prefix], keyword));

interface PrefixKeywordAtStartOfStringResult {
  prefix: Prefix;
  matchingKeyword: string;
}

export const prefixKeywordAtStartOfString = (
  str: string,
  prefixKeywords: UnitPrefixKeywords
): PrefixKeywordAtStartOfStringResult =>
  Object
    .entries(prefixKeywords)
    .map(([prefix, keywords]) => keywords.map(keyword => ({prefix, matchingKeyword: keyword})))
    .flat()
    .find(r => str.startsWith(r.matchingKeyword))
  ?? {prefix: null, matchingKeyword: ''};

export const matchingUnitsWithPrefix = (
  keyword: string,
  unitKeywords: UnitKeywords,
  prefixKeywords: UnitPrefixKeywords
): UnitOrPrefixSearchResultItem[] => {
  const units = matchingUnits(keyword, unitKeywords).map(UnitOrPrefixSearchResultItem.fromUnitKeys);
  const prefixes = matchingPrefixes(keyword, prefixKeywords).map(UnitOrPrefixSearchResultItem.fromPrefix);
  const result = [...units, ...prefixes];
  const {prefix, matchingKeyword} = prefixKeywordAtStartOfString(keyword, prefixKeywords);
  if (prefix) {
    const keywordWithoutPrefix = keyword.slice(matchingKeyword.length);
    const prefixedUnits = matchingUnits(keywordWithoutPrefix, unitKeywords)
      .map(UnitOrPrefixSearchResultItem.fromUnitKeysWithPrefix(prefix));
    result.push(...prefixedUnits);
  }
  return result;
}

export const findUnit = <D extends DimensionName>(dimension: D, unitName: UnitName<D>): Unit => {
  for (const [key, unit] of Object.entries(allUnits[dimension].units)) {
    if (key === unitName) return unit;
  }
  throw new Error(`No unit with name ${unitName} in dimension ${dimension}.`);
}

export const findUnitFromUnitKeys = <D extends DimensionName>({
                                                                dimensionKey,
                                                                unitKey
                                                              }: UnitKeys<D>) => findUnit(dimensionKey, unitKey);

export const orderSearchResults = (
  results: UnitOrPrefixSearchResultItem[],
  keyword: string,
  unitKeywords: UnitKeywords,
  prefixKeywords: UnitPrefixKeywords,
  unitTextFn: UnitTextFn,
): UnitOrPrefixSearchResultItem[] => {
  const keywordMap = new Map<string, string[]>(
    results.map(result => {
      const keywords = result.isPrefixOnly()
        ? prefixKeywords[result.prefix!]
        // @ts-ignore
        : unitKeywords?.[result.unit!.dimensionKey]?.[result.unit!.unitKey];
      if (result.unit) {
        const unit = findUnitFromUnitKeys(result.unit);
        keywords.push(unitTextFn(unit));
      }
      return [result.id(), keywords];
    })
  );
  return orderByKeywords(keywordMap, compareMatch(keyword)).map(UnitOrPrefixSearchResultItem.fromId);
}