import React, {forwardRef} from 'react';
import {useId} from '@floating-ui/react';

interface ItemProps {
  children: React.ReactNode;
  active: boolean;
}

export const Item = forwardRef<
  HTMLDivElement,
  ItemProps & React.HTMLProps<HTMLDivElement>
>(({children, active, ...rest}, ref) => {
  const id = useId();
  return (
    <div
      ref={ref}
      role="option"
      id={id}
      aria-selected={active}
      {...rest}
      style={{
        background: active ? "lightblue" : "none",
        padding: 4,
        cursor: "default",
        ...rest.style
      }}
    >
      {children}
    </div>
  );
});