import {CountryCode} from './CountryCode';
import {FlagCode} from './FlagCode';
import {LanguageCode} from './LanguageCode';

export type Language = {
  code: LanguageCode;
  nativeName: string;
  countries: CountryCode[];
  overrideFlag?: FlagCode | Partial<Record<CountryCode, FlagCode>>; // Flag to represent the language, either for all countries or for some given countries
  defaultFlag: FlagCode; // Flag to represent the language if no country is given
};