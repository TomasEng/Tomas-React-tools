import {languages} from './languages';

export const languageCodesWithCountryCodes = Object
  .values(languages)
  .map(language => language.countries.map(country => `${language.code}-${country}`))
  .flat();