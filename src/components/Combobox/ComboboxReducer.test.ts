import {ComboboxAction, ComboboxActionType, comboboxReducer} from './ComboboxReducer';
import {ComboboxState} from './types/ComboboxState';

// Test data:
const state: ComboboxState = {
  isOpen: false,
  isInWriteMode: false,
  inputValue: '',
  activeIndex: 0,
  selectedItem: null,
};

describe('ComboboxReducer', () => {
  describe('openOrClose', () => {
    it.each([true, false])('Sets isOpen to newOpenState when %s', (newOpenState) => {
      const action: ComboboxAction = {
        type: ComboboxActionType.OpenOrClose,
        newOpenState,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.isOpen).toBe(newOpenState);
    });

    it.each([true, false])('Sets isInWriteMode to false when newOpenState is false and isInWriteMode was %s', (isInWriteMode) => {
      const action: ComboboxAction = {
        type: ComboboxActionType.OpenOrClose,
        newOpenState: false,
      };
      const testState = {...state, isInWriteMode};
      const newState = comboboxReducer(testState, action);
      expect(newState.isInWriteMode).toBe(false);
    });

    it.each([true, false])('Does not change isInWriteMode when newOpenState is true and isInWriteMode was %s', (isInWriteMode) => {
      const action: ComboboxAction = {
        type: ComboboxActionType.OpenOrClose,
        newOpenState: true,
      };
      const testState = {...state, isInWriteMode};
      const newState = comboboxReducer(testState, action);
      expect(newState.isInWriteMode).toBe(isInWriteMode);
    });
  });

  describe('changeInputValue', () => {
    it('Sets inputValue to newInputValue', () => {
      const newInputValue = 'newInputValue';
      const action: ComboboxAction = {
        type: ComboboxActionType.ChangeInputValue,
        newInputValue,
        closeWhenEmpty: false,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.inputValue).toBe(newInputValue);
    });

    it('Sets isOpen to true when closeWhenEmpty is false and newInputValue is not empty', () => {
      const action: ComboboxAction = {
        type: ComboboxActionType.ChangeInputValue,
        newInputValue: 'newInputValue',
        closeWhenEmpty: false,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.isOpen).toBe(true);
    });

    it('Sets isOpen to true when closeWhenEmpty is false and newInputValue is empty', () => {
      const action: ComboboxAction = {
        type: ComboboxActionType.ChangeInputValue,
        newInputValue: '',
        closeWhenEmpty: false,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.isOpen).toBe(true);
    });

    it('Sets isOpen to false when closeWhenEmpty is true and newInputValue is empty', () => {
      const action: ComboboxAction = {
        type: ComboboxActionType.ChangeInputValue,
        newInputValue: '',
        closeWhenEmpty: true,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.isOpen).toBe(false);
    });

    it('Sets isOpen to true when closeWhenEmpty is true and newInputValue is not empty', () => {
      const action: ComboboxAction = {
        type: ComboboxActionType.ChangeInputValue,
        newInputValue: 'newInputValue',
        closeWhenEmpty: true,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.isOpen).toBe(true);
    });

    it('Sets isInWriteMode to true and activeIndex to 0', () => {
      const action: ComboboxAction = {
        type: ComboboxActionType.ChangeInputValue,
        newInputValue: 'newInputValue',
        closeWhenEmpty: false,
      };
      const testState = {...state, isInWriteMode: false, activeIndex: 1};
      const newState = comboboxReducer(testState, action);
      expect(newState.isInWriteMode).toBe(true);
      expect(newState.activeIndex).toBe(0);
    });
  });

  describe('setActiveIndex', () => {
    it('Sets activeIndex to newActiveIndex', () => {
      const newActiveIndex = 1;
      const action: ComboboxAction = {
        type: ComboboxActionType.SetActiveIndex,
        newActiveIndex,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.activeIndex).toBe(newActiveIndex);
    });
  });

  describe('activateWriteMode', () => {
    it('Sets isInWriteMode to true', () => {
      const action: ComboboxAction = {
        type: ComboboxActionType.ActivateWriteMode,
        openImmediately: false,
      };
      const newState = comboboxReducer(state, action);
      expect(newState.isInWriteMode).toBe(true);
    });

    it.each([
      [true, true, true],
      [true, true, false],
      [true, false, true],
      [false, false, false],
    ])('Sets isOpen to %s when openImmediately is %s and isOpen was %s', (expectedIsOpen, openImmediately, isOpen) => {
      const action: ComboboxAction = {
        type: ComboboxActionType.ActivateWriteMode,
        openImmediately,
      };
      const testState = {...state, isOpen};
      const newState = comboboxReducer(testState, action);
      expect(newState.isOpen).toBe(expectedIsOpen);
    });
  });
});