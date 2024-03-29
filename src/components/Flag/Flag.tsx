import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import cn from 'classnames';
import style from './Flag.module.css';
import otherFlagClasses from './other-flags.module.css';
import {FlagCode} from '../../types/FlagCode';

export interface FlagProps {
  code: FlagCode;
  squared?: boolean;
}

const generateClass = (code: FlagCode, squared: boolean) => {
  const flagIconsClasses = cn(style.root, 'fi', squared && 'fis');
  switch (code) {
    case 'eo':
      return cn(flagIconsClasses, otherFlagClasses.esperanto, squared && otherFlagClasses.squared);
    case 'ido':
      return cn(flagIconsClasses, otherFlagClasses.ido, squared && otherFlagClasses.squared);
    case 'oc':
      return cn(flagIconsClasses, otherFlagClasses.occitania, squared && otherFlagClasses.squared);
    case 'sami':
      return cn(flagIconsClasses, otherFlagClasses.sami, squared && otherFlagClasses.squared);
    default:
      return cn(flagIconsClasses, `fi-${code}`);
  }
}

export const Flag = ({code, squared = false}: FlagProps) =>
  <span className={generateClass(code, squared)}/>;