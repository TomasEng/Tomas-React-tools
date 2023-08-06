import {length, Measure, Unit} from 'enheter';

export type UnitInputState = {
  unit?: Unit;
  number?: number;
  measure?: Measure;
}

export enum UnitInputActionType {
  SetUnit = 'SetMeasure',
  SetNumber = 'SetNumber',
}

type SetUnitAction = {
  type: UnitInputActionType.SetUnit;
  unit: Unit;
}

type SetNumberAction = {
  type: UnitInputActionType.SetNumber;
  number: number;
}

export type UnitInputAction = SetUnitAction | SetNumberAction;

type UnitInputReducer<T extends UnitInputAction> = (state: UnitInputState, action: T) => UnitInputState;

const setUnit: UnitInputReducer<SetUnitAction> = (state, action) => {
  const newMeasure = state.measure?.copy() ?? length('metre', 0);
  const number = state.measure?.value ?? 0;
  newMeasure.convertTo(action.unit);
  newMeasure.value = number;
  return {measure: newMeasure};
};

const setNumber: UnitInputReducer<SetNumberAction> = (state, action) => {
  const newMeasure = state.measure?.copy() ?? length('metre', 0);
  newMeasure.value = action.number;
  return {measure: newMeasure};
};

export const unitInputReducer: UnitInputReducer<UnitInputAction> = (state, action) => {
  switch (action.type) {
    case UnitInputActionType.SetUnit:
      return setUnit(state, action);
    case UnitInputActionType.SetNumber:
      return setNumber(state, action);
  }
};