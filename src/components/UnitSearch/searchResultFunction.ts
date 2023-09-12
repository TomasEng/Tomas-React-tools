import {matchingUnitsWithPrefix, orderSearchResults} from '../../utils/unitUtils';
import {createComboboxItem} from './createComboboxItem';
import {UnitKeywords, UnitPrefixKeywords, UnitPrefixTextFn, UnitTextFn} from '../../types';
import {UnitOrPrefixSearchResultItem} from '../../classes';
import {
  amountOfSubstanceUnit,
  areaUnit,
  densityUnit,
  energyUnit,
  forceUnit,
  lengthUnit,
  luminousIntensityUnit,
  massUnit,
  powerUnit,
  pressureUnit,
  temperatureUnit,
  timeUnit,
  velocityUnit,
  volumeUnit
} from 'enheter';
import {UnitDimensionText} from '../../types/UnitDimensionText';

const defaultResult: UnitOrPrefixSearchResultItem[] = [
  UnitOrPrefixSearchResultItem.fromUnit(lengthUnit('metre')),
  UnitOrPrefixSearchResultItem.fromUnit(timeUnit('second')),
  UnitOrPrefixSearchResultItem.fromUnit(massUnit('gram').withPrefix('kilo')),
  UnitOrPrefixSearchResultItem.fromUnit(velocityUnit('metrePerSecond')),
  UnitOrPrefixSearchResultItem.fromUnit(areaUnit('squareMetre')),
  UnitOrPrefixSearchResultItem.fromUnit(volumeUnit('litre')),
  UnitOrPrefixSearchResultItem.fromUnit(temperatureUnit('celsius')),
  UnitOrPrefixSearchResultItem.fromUnit(densityUnit('gramPerCubicCentimetre')),
  UnitOrPrefixSearchResultItem.fromUnit(forceUnit('newton')),
  UnitOrPrefixSearchResultItem.fromUnit(energyUnit('joule')),
  UnitOrPrefixSearchResultItem.fromUnit(powerUnit('watt')),
  UnitOrPrefixSearchResultItem.fromUnit(pressureUnit('pascal')),
  UnitOrPrefixSearchResultItem.fromUnit(amountOfSubstanceUnit('mole')),
  UnitOrPrefixSearchResultItem.fromUnit(luminousIntensityUnit('candela')),
  UnitOrPrefixSearchResultItem.fromUnit(lengthUnit('inch')),
  UnitOrPrefixSearchResultItem.fromUnit(lengthUnit('foot')),
  UnitOrPrefixSearchResultItem.fromUnit(temperatureUnit('kelvin')),
  UnitOrPrefixSearchResultItem.fromUnit(temperatureUnit('fahrenheit')),
];

export const searchResultFunction = (
  unitKeywords: UnitKeywords,
  prefixKeywords: UnitPrefixKeywords,
  unitTextFn: UnitTextFn,
  unitPrefixTextFn: UnitPrefixTextFn,
  dimensionText: UnitDimensionText,
  maxNumberOfResults: number,
) => (keyword: string) => (
  keyword ? orderSearchResults(
    matchingUnitsWithPrefix(keyword, unitKeywords, prefixKeywords),
    keyword,
    unitKeywords,
    prefixKeywords,
    unitTextFn,
  ) : defaultResult
).slice(0, maxNumberOfResults).map(it => createComboboxItem(it, unitTextFn, unitPrefixTextFn, dimensionText))