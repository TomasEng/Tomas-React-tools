import {LanguageWithCountry} from '../types/LanguageWithCountry';
import {CountryCode} from '../types/CountryCode';
import {LanguageCode} from '../types/LanguageCode';
import {languages} from '../data/languages';
import {Language} from '../types/Language';
import {compareByKeys, compareMatch} from './compareFunctions';

export const extractCountryCode = (languageCode: LanguageWithCountry): CountryCode =>
  languageCode.split('-')[1] as CountryCode;

export const extractLanguageCode = (languageCode: LanguageWithCountry): LanguageCode =>
  languageCode.split('-')[0] as LanguageCode;

export const getLanguageData = (languageCode: LanguageWithCountry): Language =>
  languages[extractLanguageCode(languageCode)];

export const getNativeName = (languageCode: LanguageWithCountry): string =>
  getLanguageData(languageCode).nativeName;

export const sortLanguagesByMatch = (languages: LanguageWithCountry[], search: string): LanguageWithCountry[] =>
  languages
    .map(code => ({code, nativeName: getNativeName(code)}))
    .sort(compareByKeys(['nativeName', 'code'], compareMatch(search)))
    .map(({code}) => code);
