import {extractCountryCode, extractLanguageCode, getNativeName} from './languageUtils';

describe('languageUtils', () => {
  describe('extractCountryCode', () => {
    it('Extracts the country code', () => {
      expect(extractCountryCode('nb-NO')).toBe('NO');
      expect(extractCountryCode('en-GB')).toBe('GB');
    });
  });

  describe('extractLanguageCode', () => {
    it('Extracts the language code', () => {
      expect(extractLanguageCode('nb-NO')).toBe('nb');
      expect(extractLanguageCode('en-GB')).toBe('en');
    });
  });

  describe('getNativeName', () => {
    it('Returns the native name of the language', () => {
      expect(getNativeName('nb-NO')).toBe('Norsk bokmål');
      expect(getNativeName('en-GB')).toBe('English');
    });
  });
});