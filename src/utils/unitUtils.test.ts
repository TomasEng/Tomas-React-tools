import {chargeUnit, lengthUnit, massUnit} from 'enheter';
import {initializeUnit, matchingPrefixes, matchingUnits} from './unitUtils';
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
      expect(result).toContain(chargeUnit('coulomb'));
      expect(result).toContain(chargeUnit('statcoulomb'));
    });

    it('Includes the unit\'s symbol when searching', () => {
      const result = matchingUnits('℥', unitKeywords);
      expect(result).toContain(massUnit('ounce'));
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
});