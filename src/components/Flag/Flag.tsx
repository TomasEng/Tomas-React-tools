import React from 'react';
import {CountryCode} from '../../types/CountryCode';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import cn from 'classnames';

export interface FlagProps {
  country: CountryCode;
  squared?: boolean;
}

export const Flag = ({country, squared = false}: FlagProps) => (
  <span
    className={cn(
      'fi',
      `fi fi-${country.toLowerCase()}`,
      squared && 'fis'
    )}
  />
);