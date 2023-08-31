import React, {MutableRefObject} from 'react';
import {FloatingFocusManager, FloatingPortal, UseFloatingReturn, useInteractions} from '@floating-ui/react';
import style from './ComboboxList.module.css';
import {Item} from './Item';
import {ComboboxItem} from '../Combobox';

export interface ComboboxListProps {
  activeIndex: number | null;
  floating: UseFloatingReturn<HTMLInputElement>;
  interactions: ReturnType<typeof useInteractions>;
  items: ComboboxItem[];
  listRef: MutableRefObject<(HTMLElement | null)[]>;
  open: boolean;
  selectItem: (item: ComboboxItem) => void;
}

export const ComboboxList = ({
                               activeIndex,
                               floating,
                               interactions,
                               items,
                               listRef,
                               open,
                               selectItem,
                             }: ComboboxListProps) => {
  const {refs, floatingStyles, context} = floating;
  const {getFloatingProps, getItemProps} = interactions;
  return (
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
                value={item.value}
              >
                {item.label}
              </Item>
            ))}
          </div>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  );
}