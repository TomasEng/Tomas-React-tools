import React from 'react';
import {LanguageCodeWithCountryCode} from '../../types/LanguageCodeWithCountryCode';
import {Flag} from '../Flag';
import {findFlagCodeFromLanguageCode, getNativeName} from '../../utils/languageUtils';
import {LanguageCode} from '../../types/LanguageCode';
import style from './LanguageItem.module.css';

export interface LanguageItemProps {
  language: LanguageCodeWithCountryCode | LanguageCode;
}

export const LanguageItem = ({language}: LanguageItemProps) => (
  <span className={style.root}>
    <Flag code={findFlagCodeFromLanguageCode(language)}/>
    <span>{getNativeName(language)}</span>
  </span>
);