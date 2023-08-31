import {ComboboxState} from './types/ComboboxState';
import {ComboboxItem} from './types/ComboboxItem';

export enum ComboboxActionType {
  OpenOrClose,
  ChangeInputValue,
  SelectItem,
  SetActiveIndex,
  ActivateWriteMode,
}

type OpenOrCloseAction = {
  type: ComboboxActionType.OpenOrClose;
  newOpenState: boolean;
};
type ChangeInputValueAction = {
  type: ComboboxActionType.ChangeInputValue;
  newInputValue: string;
  closeWhenEmpty: boolean;
};
type SelectItemAction = {
  type: ComboboxActionType.SelectItem;
  item: ComboboxItem;
};
type SetActiveIndexAction = {
  type: ComboboxActionType.SetActiveIndex;
  newActiveIndex: number | null;
}
type ActivateWriteModeAction = {
  type: ComboboxActionType.ActivateWriteMode;
  openImmediately: boolean;
}

export type ComboboxAction =
  | OpenOrCloseAction
  | ChangeInputValueAction
  | SelectItemAction
  | SetActiveIndexAction
  | ActivateWriteModeAction;

export type ComboboxReducer<A extends { type: ComboboxActionType }> = (state: ComboboxState, action: A) => ComboboxState;

const openOrClose: ComboboxReducer<OpenOrCloseAction> = (state, action) => ({
  ...state,
  isOpen: action.newOpenState,
  isInWriteMode: action.newOpenState && state.isInWriteMode,
});

const changeInputValue: ComboboxReducer<ChangeInputValueAction> = (state, action) => ({
  ...state,
  inputValue: action.newInputValue,
  isOpen: !action.closeWhenEmpty || action.newInputValue.length > 0,
  isInWriteMode: true,
  activeIndex: 0,
});

const selectItem: ComboboxReducer<SelectItemAction> = (state, action) => ({
  ...state,
  selectedItem: action.item,
  inputValue: '',
  isOpen: false,
  isInWriteMode: false,
});

const setActiveIndex: ComboboxReducer<SetActiveIndexAction> = (state, action) => ({
  ...state,
  activeIndex: action.newActiveIndex,
});

const activateWriteMode: ComboboxReducer<ActivateWriteModeAction> = (state, action) => ({
  ...state,
  isInWriteMode: true,
  isOpen: action.openImmediately || state.isOpen,
});

export const comboboxReducer: ComboboxReducer<ComboboxAction> = (state, action) => {
  switch (action.type) {
    case ComboboxActionType.OpenOrClose:
      return openOrClose(state, action);
    case ComboboxActionType.ChangeInputValue:
      return changeInputValue(state, action);
    case ComboboxActionType.SelectItem:
      return selectItem(state, action);
    case ComboboxActionType.SetActiveIndex:
      return setActiveIndex(state, action);
    case ComboboxActionType.ActivateWriteMode:
      return activateWriteMode(state, action);
    default:
      return state;
  }
}
