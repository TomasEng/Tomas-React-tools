import React, {useRef, useState} from "react";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole
} from "@floating-ui/react";
import {Button, TextField} from '@digdir/design-system-react';
import {Item} from './Item';
import style from './Combobox.module.css';

export interface ComboboxItem {
  value: string;
  label: React.ReactNode;
  searchString?: string;
}

export interface ComboboxProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  searchResult: (input: string) => ComboboxItem[];
}

export const Combobox = ({
                           placeholder,
                           onChange: triggerOnChange,
                           searchResult,
                         }: ComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ComboboxItem | null>(null);

  const listRef = useRef<Array<HTMLElement | null>>([]);

  const {refs, floatingStyles, context} = useFloating<HTMLInputElement>({
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

  const role = useRole(context, {role: "listbox"});
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true
  });

  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = useInteractions([role, dismiss, listNav]);

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
        color='secondary'
        onClick={() => setSelectedItem(null)}
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
      <FloatingPortal>
        {open && (
          <FloatingFocusManager
            context={context}
            initialFocus={-1}
            visuallyHiddenDismiss
          >
            <div
              {...getFloatingProps({
                ref: refs.setFloating,
                style: floatingStyles
              })}
              className={style.list}
            >
              {items.map((item, index) => (
                <Item
                  {...getItemProps({
                    key: item.value,
                    ref: (node) => {
                      listRef.current[index] = node;
                    },
                    onClick: () => {
                      selectItem(item);
                      refs.domReference.current?.focus();
                    }
                  })}
                  active={activeIndex === index}
                >
                  {item.label}
                </Item>
              ))}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
}
