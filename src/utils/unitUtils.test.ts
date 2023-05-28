import {lengthUnit, massUnit} from 'enheter';
import {initializeUnit} from './unitUtils';

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
});