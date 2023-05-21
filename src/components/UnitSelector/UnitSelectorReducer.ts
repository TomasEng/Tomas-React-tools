import {findUnitsByDimension, Prefix, Unit} from 'enheter';

export interface UnitSelectorState {
  unit: Unit;
}

export enum UnitSelectorActionType {
  SET_UNIT = 'SET_UNIT',
  SET_UNIT_KEY = 'SET_UNIT_KEY',
  SET_PREFIX = 'SET_PREFIX',
}

interface SetUnitAction {
  type: UnitSelectorActionType.SET_UNIT;
  unit: Unit;
}

interface SetUnitKeyAction {
  type: UnitSelectorActionType.SET_UNIT_KEY;
  unitKey: string;
}

interface SetPrefixAction {
  type: UnitSelectorActionType.SET_PREFIX;
  prefix: string;
}

export type UnitSelectorAction = SetUnitAction | SetUnitKeyAction | SetPrefixAction;

const setUnit = (state: UnitSelectorState, action: SetUnitAction): UnitSelectorState => ({
  unit: action.unit,
});

const setUnitKey = (state: UnitSelectorState, action: SetUnitKeyAction): UnitSelectorState => {
  const {prefix, dimension} = state.unit;
  const unit = findUnitsByDimension(dimension)[action.unitKey].withPrefix(prefix);
  return {unit};
};

const setPrefix = (state: UnitSelectorState, action: SetPrefixAction): UnitSelectorState => ({
  unit: state.unit.withPrefix(action.prefix || null as Prefix),
});

export const unitSelectorReducer = (callback: (state: UnitSelectorState) => void) =>
  (state: UnitSelectorState, action: UnitSelectorAction): UnitSelectorState => {
    let newState;
    switch (action.type) {
      case UnitSelectorActionType.SET_UNIT:
        newState = setUnit(state, action);
        break;
      case UnitSelectorActionType.SET_UNIT_KEY:
        newState = setUnitKey(state, action);
        break;
      case UnitSelectorActionType.SET_PREFIX:
        newState = setPrefix(state, action);
        break;
      default:
        newState = state;
    }
    callback(newState);
    return newState;
  };

export const prefixAsString = (prefix: Prefix): string => prefix as string || '';