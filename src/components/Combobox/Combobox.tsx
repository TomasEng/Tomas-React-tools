import React, {useEffect, useMemo, useReducer, useRef} from "react";
import {
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole
} from "@floating-ui/react";
import {Button, TextField} from '@digdir/design-system-react';
import {ComboboxList} from './ComboboxList';
import '@digdir/design-system-tokens/brand/digdir/tokens.css';
import style from './Combobox.module.css';
import cn from 'classnames';
import {ComboboxProps} from './types/ComboboxProps';
import {ComboboxItem} from './types/ComboboxItem';
import {ComboboxActionType, comboboxReducer} from './ComboboxReducer';

export const Combobox = ({
                           placeholder,
                           onChange: triggerOnChange,
                           openOnFocus = false,
                           searchResult,
                           selectedClassName,
                           value = '',
                         }: ComboboxProps) => {

  const selectedItemFromProps: ComboboxItem | null = useMemo(() => {
    if (typeof value === 'string') {
      const items = searchResult(value);
      return items.find(item => item.value === value) ?? null;
    } else return value;
  }, [searchResult, value]);

  const [state, dispatch] = useReducer(comboboxReducer, {
    activeIndex: null,
    inputValue: '',
    isInWriteMode: false,
    isOpen: false,
    selectedItem: selectedItemFromProps,
  });

  useEffect(() => {
    if (selectedItemFromProps) {
      dispatch({type: ComboboxActionType.SelectItem, item: selectedItemFromProps});
    }
  }, [selectedItemFromProps]);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const floating = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open: state.isOpen,
    onOpenChange: newOpenState => dispatch({type: ComboboxActionType.OpenOrClose, newOpenState}),
    middleware: [
      flip({padding: 10}),
      size({
        apply({rects, availableHeight, elements}) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`
          });
        },
        padding: 10
      })
    ]
  });

  const {refs, context} = floating;

  const role = useRole(context, {role: "listbox"});
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex: state.activeIndex,
    onNavigate: newActiveIndex => dispatch({type: ComboboxActionType.SetActiveIndex, newActiveIndex}),
    virtual: true,
    loop: true
  });

  const interactions = useInteractions([role, dismiss, listNav]);
  const {getReferenceProps} = interactions;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    dispatch({type: ComboboxActionType.ChangeInputValue, newInputValue: value, closeWhenEmpty: !openOnFocus});
  }

  const items = searchResult(state.inputValue);

  const selectItem = (item: ComboboxItem) => {
    dispatch({type: ComboboxActionType.SelectItem, item});
    triggerOnChange?.(item.value);
  };

  if (!state.isInWriteMode && state.selectedItem) {
    return (
      <Button
        className={cn(selectedClassName, style.button)}
        color='secondary'
        onClick={() => dispatch({type: ComboboxActionType.ActivateWriteMode, openImmediately: openOnFocus})}
        role='combobox'
        size='small'
        type='button'
        value={state.selectedItem.value}
        variant='outline'
      >
        {state.selectedItem.label}
      </Button>
    );
  }

  return (
    <>
      <TextField
        autoComplete='off'
        autoFocus
        {...getReferenceProps({
          ref: refs.setReference,
          onChange,
          onFocus: () => openOnFocus && dispatch({type: ComboboxActionType.OpenOrClose, newOpenState: true}),
          value: state.inputValue,
          placeholder,
          "aria-autocomplete": "list",
          onKeyDown(event) {
            if (
              event.key === "Enter" &&
              state.activeIndex != null &&
              items[state.activeIndex]
            ) {
              selectItem(items[state.activeIndex]);
              dispatch({type: ComboboxActionType.SetActiveIndex, newActiveIndex: null});
            }
          }
        })}
      />
      <ComboboxList
        activeIndex={state.activeIndex}
        floating={floating}
        interactions={interactions}
        items={items}
        listRef={listRef}
        open={state.isOpen}
        selectItem={selectItem}
      />
    </>
  );
}
