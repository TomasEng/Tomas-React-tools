import {CountryCode} from './CountryCode';

export type Language<Code extends string> = {
  code: Code;
  nativeName: string;
  countries: CountryCode[];
};