import React from 'react';
import style from './UnitItem.module.css';

export interface UnitItemProps {
  name: string;
  symbol: string;
  dimension: string;
}

export const UnitItem = ({name, symbol, dimension}: UnitItemProps) => (
  <span className={style.root}>
    <span className={style.unit}>
      <span>{name}</span>
      &nbsp;
      <span>({symbol})</span>
    </span>
    <span className={style.dimension}>{dimension}</span>
  </span>
);