import {lengthUnit, massUnit} from 'enheter';
import {
  findUnit,
  initializeUnit,
  matchingPrefixes,
  matchingUnits,
  matchingUnitsWithPrefix,
  prefixKeywordAtStartOfString
} from './unitUtils';
import {unitKeywords} from '../test-data/unitKeywords';
import {unitPrefixKeywords} from '../test-data/unitPrefixKeywords';

describe('unitUtils', () => {
  describe('initializeUnit', () => {
    it('Initializes the unit based on dimensionName if no unit is set', () => {
      expect(initializeUnit('length')).toEqual(lengthUnit('metre'));
      expect(initializeUnit('mass')).toEqual(massUnit('kilogram'));
    });

    it('Initializes the unit based on dimensionName if the unit is not of the correct dimension', () => {
      expect(initializeUnit('length', massUnit('kilogram'))).toEqual(lengthUnit('metre'));
      expect(initializeUnit('mass', lengthUnit('metre'))).toEqual(massUnit('kilogram'));
    });

    it('Returns the given unit if it has the correct dimension', () => {
      expect(initializeUnit('length', lengthUnit('foot'))).toEqual(lengthUnit('foot'));
      expect(initializeUnit('mass', massUnit('gram'))).toEqual(massUnit('gram'));
    });
  });

  describe('matchingUnits', () => {
    it('Returns the units of which the keywords match the search', () => {
      const result = matchingUnits('coulomb', unitKeywords);
      expect(result).toHaveLength(2);
      expect(result).toContainEqual({dimensionKey: 'charge', unitKey: 'coulomb'});
      expect(result).toContainEqual({dimensionKey: 'charge', unitKey: 'statcoulomb'});
    });

    it('Includes the unit\'s symbol when searching', () => {
      const result = matchingUnits('℥', unitKeywords);
      expect(result).toContainEqual({dimensionKey: 'mass', unitKey: 'ounce'});
    });
  });

  describe('matchingPrefixes', () => {
    it('Returns the prefixes of which the keywords match the search', () => {
      const result = matchingPrefixes('ron', unitPrefixKeywords);
      expect(result).toHaveLength(2);
      expect(result).toContain('ronto');
      expect(result).toContain('ronna');
    });
  });

  describe('prefixKeywordAtStartOfString', () => {
    it('Returns the prefix of which one of the keywords match the start of the string', () => {
      expect(prefixKeywordAtStartOfString('kilometer', unitPrefixKeywords)).toEqual({
        prefix: 'kilo',
        matchingKeyword: 'kilo'
      });
      expect(prefixKeywordAtStartOfString('centimeter', unitPrefixKeywords)).toEqual({
        prefix: 'centi',
        matchingKeyword: 'centi'
      });
      expect(prefixKeywordAtStartOfString('meter', unitPrefixKeywords)).toEqual({prefix: null, matchingKeyword: ''});
      expect(prefixKeywordAtStartOfString('kilo', unitPrefixKeywords)).toEqual({
        prefix: 'kilo',
        matchingKeyword: 'kilo'
      });
    });
  });

  describe('matchingUnitsWithPrefix', () => {
    it('Returns a list of matching units if the keyword matches units', () => {
      const result = matchingUnitsWithPrefix('metre', unitKeywords, unitPrefixKeywords);
      expect(result).toContainEqual({unit: {dimensionKey: 'length', unitKey: 'metre'}, prefix: null});
      expect(result).toContainEqual({unit: {dimensionKey: 'area', unitKey: 'squareMetre'}, prefix: null});
      expect(result).toContainEqual({unit: {dimensionKey: 'volume', unitKey: 'cubicMetre'}, prefix: null});
      expect(result).not.toContainEqual({unit: {dimensionKey: 'temperature', unitKey: 'celsius'}, prefix: null});
    });

    it('Returns a list of matching units and prefixes if the keyword matches units and prefixes', () => {
      const result = matchingUnitsWithPrefix('ce', unitKeywords, unitPrefixKeywords);
      expect(result).toContainEqual({unit: {dimensionKey: 'temperature', unitKey: 'celsius'}, prefix: null});
      expect(result).toContainEqual({unit: undefined, prefix: 'centi'});
      expect(result).not.toContainEqual({unit: {dimensionKey: 'length', unitKey: 'metre'}, prefix: null});
    });

    it('Returns a list of matching units with prefix if the keyword matches a prefixed unit', () => {
      const result = matchingUnitsWithPrefix('centimetre', unitKeywords, unitPrefixKeywords);
      expect(result).toContainEqual({unit: {dimensionKey: 'length', unitKey: 'metre'}, prefix: 'centi'});
      expect(result).not.toContainEqual({unit: {dimensionKey: 'length', unitKey: 'metre'}, prefix: null});
    });

    it('Includes matcing prefixless units in the result when searching for prefixed units', () => {
      const result = matchingUnitsWithPrefix('centimetre', unitKeywords, unitPrefixKeywords);
      expect(result).toContainEqual({unit: {dimensionKey: 'density', unitKey: 'gramPerCubicCentimetre'}, prefix: null});
    });
  });

  describe('findUnit', () => {
    it('Returns the unit if it is found', () => {
      expect(findUnit('length', 'metre')).toEqual(lengthUnit('metre'));
      expect(findUnit('mass', 'kilogram')).toEqual(massUnit('kilogram'));
    });
  });
});