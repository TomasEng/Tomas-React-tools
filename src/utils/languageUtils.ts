import {LanguageWithCountry} from '../types/LanguageWithCountry';
import {CountryCode} from '../types/CountryCode';
import {LanguageCode} from '../types/LanguageCode';
import {languages} from '../data/languages';

export const extractCountryCode = (languageCode: LanguageWithCountry): CountryCode =>
  languageCode.split('-')[1] as CountryCode;

export const extractLanguageCode = (languageCode: LanguageWithCountry): LanguageCode =>
  languageCode.split('-')[0] as LanguageCode;

export const getNativeName = (languageCode: LanguageWithCountry): string =>
  languages[extractLanguageCode(languageCode)].nativeName;