import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import cn from 'classnames';
import otherFlagClasses from './other-flags.module.css';
import {FlagCode} from '../../types/FlagCode';

export interface FlagProps {
  code: FlagCode;
  squared?: boolean;
}

const generateClass = (code: FlagCode, squared: boolean) => {
  const flagIconsClasses = cn('fi', squared && 'fis');
  switch (code) {
    case 'eo':
      return cn(flagIconsClasses, otherFlagClasses.esperanto, squared && otherFlagClasses.squared);
    case 'sami':
      return cn(flagIconsClasses, otherFlagClasses.sami, squared && otherFlagClasses.squared);
    default:
      return cn(flagIconsClasses, `fi-${code}`);
  }
}

export const Flag = ({code, squared = false}: FlagProps) =>
  <span className={generateClass(code, squared)}/>;