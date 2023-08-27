import React, {useEffect, useRef, useState} from "react";
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

export interface ComboboxItem {
  value: string;
  label: React.ReactNode;
  searchString?: string;
}

export interface ComboboxProps {
  onChange?: (value: string) => void;
  openOnFocus?: boolean;
  placeholder?: string;
  searchResult: (input: string) => ComboboxItem[];
  selectedClassName?: string;
  value?: string | ComboboxItem;
}

export const Combobox = ({
                           placeholder,
                           onChange: triggerOnChange,
                           openOnFocus = false,
                           searchResult,
                           selectedClassName,
                           value = '',
                         }: ComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ComboboxItem | null>(null);

  useEffect(() => {
    if (typeof value === 'string') {
      const items = searchResult(value);
      const newSelectedValue = items.find(item => item.value === value);
      if (newSelectedValue) setSelectedItem(newSelectedValue);
      else setSelectedItem(null);
    } else if (value) {
      setSelectedItem(value);
    }
  }, [searchResult, value]);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const floating = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
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
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true
  });

  const interactions = useInteractions([role, dismiss, listNav]);
  const {getReferenceProps} = interactions;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setInputValue(value);
    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }

  const items = searchResult(inputValue);

  const selectItem = (item: ComboboxItem) => {
    if (item.searchString) {
      setInputValue(item.searchString);
    } else {
      setInputValue('');
      setSelectedItem(item);
      triggerOnChange && triggerOnChange(item.value);
    }
    setOpen(false);
  }

  if (selectedItem) {
    return (
      <Button
        className={cn(selectedClassName, style.button)}
        color='secondary'
        onClick={() => setSelectedItem(null)}
        role='combobox'
        size='medium'
        type='button'
        value={selectedItem.value}
        variant='outline'
      >
        {selectedItem.label}
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
          onFocus: () => openOnFocus && setOpen(true),
          value: inputValue,
          placeholder,
          "aria-autocomplete": "list",
          onKeyDown(event) {
            if (
              event.key === "Enter" &&
              activeIndex != null &&
              items[activeIndex]
            ) {
              selectItem(items[activeIndex]);
              setActiveIndex(null);
            }
          }
        })}
      />
      <ComboboxList
        activeIndex={activeIndex}
        floating={floating}
        interactions={interactions}
        items={items}
        listRef={listRef}
        open={open}
        selectItem={selectItem}
      />
    </>
  );
}
