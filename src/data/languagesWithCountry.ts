import {languages} from './languages';

export const languagesWithCountry = Object
  .values(languages)
  .map(language => language.countries.map(country => `${language.code}-${country}`))
  .flat();