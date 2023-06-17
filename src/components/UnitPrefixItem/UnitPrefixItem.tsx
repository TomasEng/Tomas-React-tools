import React from 'react';
import {Prefix} from 'enheter';

export interface UnitPrefixItemProps {
  prefix: Prefix,
  prefixName: string,
}

export const UnitPrefixItem = ({prefixName}: UnitPrefixItemProps) => (
  <span>{prefixName}</span>
);