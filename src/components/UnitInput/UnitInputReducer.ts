import {Measure, Unit} from 'enheter';

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
  const {number} = state;
  const {unit} = action;
  const newMeasure = unit && number !== undefined ? new Measure(unit, number) : undefined;
  return {measure: newMeasure, unit, number};
};

const setNumber: UnitInputReducer<SetNumberAction> = (state, action) => {
  const {number} = action;
  const {unit} = state;
  const newMeasure = unit && number !== undefined ? new Measure(unit, number) : undefined;
  return {measure: newMeasure, unit, number};
};

export const unitInputReducer: UnitInputReducer<UnitInputAction> = (state, action) => {
  switch (action.type) {
    case UnitInputActionType.SetUnit:
      return setUnit(state, action);
    case UnitInputActionType.SetNumber:
      return setNumber(state, action);
  }
};