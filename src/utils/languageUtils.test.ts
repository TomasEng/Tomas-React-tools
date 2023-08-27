import {extractCountryCode, extractLanguageCode, findFlagCodeFromLanguageCode, getNativeName} from './languageUtils';
import {languages} from '../data/languages';
import {flagCodesWithNames} from '../data/flagCodesWithNames';
import {languageCodesWithCountryCodes} from '../data/languageCodesWithCountryCodes';

describe('languageUtils', () => {
  describe('extractCountryCode', () => {
    it('Extracts the country code', () => {
      expect(extractCountryCode('nb-NO')).toBe('NO');
      expect(extractCountryCode('en-GB')).toBe('GB');
      expect(extractCountryCode('smj-NO')).toBe('NO');
    });
  });

  describe('extractLanguageCode', () => {
    it('Extracts the language code', () => {
      expect(extractLanguageCode('nb-NO')).toBe('nb');
      expect(extractLanguageCode('en-GB')).toBe('en');
      expect(extractLanguageCode('smj-NO')).toBe('smj');
    });
  });

  describe('getNativeName', () => {
    it('Returns the native name of the language', () => {
      expect(getNativeName('nb-NO')).toBe('Norsk bokmål');
      expect(getNativeName('en-GB')).toBe('English');
    });
  });

  describe('findFlagForLanguageCode', () => {
    describe('When a code without country code is provided', () => {
      it('Returns a valid flag code for each language code', () => {
        Object.keys(languages).forEach(languageCode => {
          expect(Object.keys(flagCodesWithNames)).toContain(findFlagCodeFromLanguageCode(languageCode));
        });
      });

      it('Returns the expected flag code', () => {
        expect(findFlagCodeFromLanguageCode('nb')).toBe('no');
        expect(findFlagCodeFromLanguageCode('nn')).toBe('no');
        expect(findFlagCodeFromLanguageCode('en')).toBe('gb');
        expect(findFlagCodeFromLanguageCode('pl')).toBe('pl');
        expect(findFlagCodeFromLanguageCode('fr')).toBe('fr');
        expect(findFlagCodeFromLanguageCode('se')).toBe('sami');
        expect(findFlagCodeFromLanguageCode('smj')).toBe('sami');
        expect(findFlagCodeFromLanguageCode('eo')).toBe('eo');
        expect(findFlagCodeFromLanguageCode('ca')).toBe('es-ct');
      });
    });

    describe('When a code with country code is provided', () => {
      it('Returns a valid flag code for each language code with country code', () => {
        languageCodesWithCountryCodes.forEach(languageCode => {
          expect(Object.keys(flagCodesWithNames)).toContain(findFlagCodeFromLanguageCode(languageCode));
        });
      });

      it('Returns the expected flag code when no overrideFlag is configured', () => {
        expect(findFlagCodeFromLanguageCode('nb-NO')).toBe('no');
        expect(findFlagCodeFromLanguageCode('nn-NO')).toBe('no');
        expect(findFlagCodeFromLanguageCode('en-GB')).toBe('gb');
        expect(findFlagCodeFromLanguageCode('en-IE')).toBe('ie');
        expect(findFlagCodeFromLanguageCode('pl-PL')).toBe('pl');
        expect(findFlagCodeFromLanguageCode('fr-FR')).toBe('fr');
        expect(findFlagCodeFromLanguageCode('fr-CA')).toBe('ca');
      });

      it('Returns the overrideFlag if it is configured for all countries', () => {
        expect(findFlagCodeFromLanguageCode('se-NO')).toBe('sami');
        expect(findFlagCodeFromLanguageCode('gd-GB')).toBe('gb-sct');
      });

      it('Returns the overrideFlag if it is configured for the given country, otherwise the given country\'s flag is returned', () => {
        expect(findFlagCodeFromLanguageCode('ca-ES')).toBe('es-ct');
        expect(findFlagCodeFromLanguageCode('ca-AD')).toBe('ad');
      });
    });

    describe('When an invalid code is provided', () => {
      it('Returns the "unknown" flag code', () => {
        expect(findFlagCodeFromLanguageCode('')).toBe('xx');
        expect(findFlagCodeFromLanguageCode('unknown')).toBe('xx');
        expect(findFlagCodeFromLanguageCode('unknown-unknown')).toBe('xx');
        expect(findFlagCodeFromLanguageCode('unknown-GB')).toBe('xx');
        expect(findFlagCodeFromLanguageCode('en-unknown')).toBe('xx');
      });
    });
  });
});