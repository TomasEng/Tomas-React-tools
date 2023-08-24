import React from 'react';
import {LanguageWithCountry} from '../../types/LanguageWithCountry';
import {Flag} from '../Flag';
import {extractCountryCode, getNativeName} from '../../utils/languageUtils';

export interface LanguageItemProps {
  language: LanguageWithCountry;
}

export const LanguageItem = ({language}: LanguageItemProps) => (
  <span>
    <Flag country={extractCountryCode(language)}/>
    {getNativeName(language)}
  </span>
);