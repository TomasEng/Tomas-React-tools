import React from 'react';
import {LanguageCodeWithCountryCode} from '../../types/LanguageCodeWithCountryCode';
import {Flag} from '../Flag';
import {findFlagCodeFromLanguageCode, getNativeName} from '../../utils/languageUtils';
import {LanguageCode} from '../../types/LanguageCode';

export interface LanguageItemProps {
  language: LanguageCodeWithCountryCode | LanguageCode;
}

export const LanguageItem = ({language}: LanguageItemProps) => (
  <span>
    <Flag code={findFlagCodeFromLanguageCode(language)}/>
    {getNativeName(language)}
  </span>
);