import {allUnits, DimensionName, findUnitsByDimension, Prefix, Unit} from 'enheter';

export interface UnitSelectorState {
  unit: Unit;
}

export enum UnitSelectorActionType {
  SET_UNIT = 'SET_UNIT',
  SET_PREFIX = 'SET_PREFIX',
  INITIALIZE_UNIT = 'INITIALIZE_UNIT',
}

interface SetUnitAction {
  type: UnitSelectorActionType.SET_UNIT;
  unitKey: string;
}

interface SetPrefixAction {
  type: UnitSelectorActionType.SET_PREFIX;
  prefix: string;
}

interface InitializeUnitAction {
  type: UnitSelectorActionType.INITIALIZE_UNIT;
  dimension: DimensionName;
}

export type UnitSelectorAction = SetUnitAction | SetPrefixAction | InitializeUnitAction;

const setUnit = (state: UnitSelectorState, action: SetUnitAction): UnitSelectorState => {
  const {prefix, dimension} = state.unit;
  const unit = findUnitsByDimension(dimension)[action.unitKey].withPrefix(prefix);
  return {unit};
};

const setPrefix = (state: UnitSelectorState, action: SetPrefixAction): UnitSelectorState => ({
  unit: state.unit.withPrefix(action.prefix || null as Prefix),
});

const setUnitWithNoPrefix = (state: UnitSelectorState, action: InitializeUnitAction): UnitSelectorState => {
  const {units} = allUnits[action.dimension];
  return {unit: Object.values(units)[0].baseUnit};
}

export const unitSelectorReducer = (callback: (state: UnitSelectorState) => void) =>
  (state: UnitSelectorState, action: UnitSelectorAction): UnitSelectorState => {
    let newState;
    switch (action.type) {
      case UnitSelectorActionType.SET_UNIT:
        newState = setUnit(state, action);
        break;
      case UnitSelectorActionType.SET_PREFIX:
        newState = setPrefix(state, action);
        break;
      case UnitSelectorActionType.INITIALIZE_UNIT:
        newState = setUnitWithNoPrefix(state, action);
        break;
      default:
        newState = state;
    }
    callback(newState);
    return newState;
  };

export const prefixAsString = (prefix: Prefix): string => prefix as string || '';