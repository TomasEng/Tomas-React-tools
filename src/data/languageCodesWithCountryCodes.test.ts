import {languageCodesWithCountryCodes} from './languageCodesWithCountryCodes';
import {countryCodesWithNames} from './countryCodesWithNames';
import {extractCountryCode, extractLanguageCode} from '../utils/languageUtils';
import {LanguageCodeWithCountryCode} from '../types/LanguageCodeWithCountryCode';
import {languages} from './languages';

describe('languageCodesWithCountryCodes', () => {
  it('Contains valid codes only', () => {
    const codeRegex = /^[a-z]{2,3}-[A-Z]{2}$/;
    languageCodesWithCountryCodes.forEach(code => {
      expect(code).toMatch(codeRegex);
      expect(Object.keys(countryCodesWithNames)).toContain(extractCountryCode(code as LanguageCodeWithCountryCode));
      expect(Object.keys(languages)).toContain(extractLanguageCode(code as LanguageCodeWithCountryCode));
    });
  });
});