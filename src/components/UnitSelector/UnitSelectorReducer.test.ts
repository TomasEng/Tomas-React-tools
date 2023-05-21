import {
  UnitSelectorAction,
  UnitSelectorActionType,
  unitSelectorReducer,
  UnitSelectorState
} from './UnitSelectorReducer';
import {lengthUnit, UnitName} from 'enheter';
import {Prefix} from 'enheter/lib/Prefix';

// Test data
const unit = lengthUnit('metre');
const state: UnitSelectorState = {unit};
const callback = jest.fn();
const reducer = () => unitSelectorReducer(callback);

describe('UnitSelectorReducer', () => {
  afterEach(jest.clearAllMocks);

  describe('SET_UNIT', () => {
    it('Sets the unit', () => {
      const newUnit = lengthUnit('foot');
      const action: UnitSelectorAction = {
        type: UnitSelectorActionType.SET_UNIT,
        unit: newUnit,
      };
      const result = reducer()(state, action);
      const expectedResult: UnitSelectorState = {unit: newUnit};
      expect(result).toEqual(expectedResult);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('SET_UNIT_KEY', () => {
    it('Sets the unit key only', () => {
      const prefix: Prefix = 'centi';
      const oldUnit = lengthUnit('metre').withPrefix(prefix);
      const newUnitKey: UnitName<'length'> = 'foot';
      const oldState: UnitSelectorState = {unit: oldUnit};
      const action: UnitSelectorAction = {
        type: UnitSelectorActionType.SET_UNIT_KEY,
        unitKey: newUnitKey,
      };
      const result = reducer()(oldState, action);
      const expectedUnit = lengthUnit(newUnitKey).withPrefix(prefix);
      const expectedResult: UnitSelectorState = {unit: expectedUnit};
      expect(result).toEqual(expectedResult);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe('SET_PREFIX', () => {
    it('Changes the prefix of the unit', () => {
      const oldPrefix: Prefix = 'centi';
      const newPrefix: Prefix = 'deci';
      const oldUnit = lengthUnit('metre').withPrefix(oldPrefix);
      const oldState: UnitSelectorState = {unit: oldUnit};
      const action: UnitSelectorAction = {
        type: UnitSelectorActionType.SET_PREFIX,
        prefix: newPrefix,
      };
      const result = reducer()(oldState, action);
      const expectedUnit = lengthUnit('metre').withPrefix(newPrefix);
      const expectedResult: UnitSelectorState = {unit: expectedUnit};
      expect(result).toEqual(expectedResult);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(expectedResult);
    });
  });
});