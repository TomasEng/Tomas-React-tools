import {LanguageCode} from './LanguageCode';
import {languages} from '../data/languages';

type LanguageCodeObject = {
  [K in LanguageCode]: `${K}-${typeof languages[K]['countries'][number]}`;
}

export type LanguageWithCountry = LanguageCodeObject[LanguageCode];