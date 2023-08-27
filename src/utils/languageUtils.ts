import {LanguageCodeWithCountryCode} from '../types/LanguageCodeWithCountryCode';
import {CountryCode} from '../types/CountryCode';
import {LanguageCode} from '../types/LanguageCode';
import {languages} from '../data/languages';
import {Language} from '../types/Language';
import {compareByKeys, compareMatch} from './compareFunctions';
import {countryCodesWithNativeNames} from '../data/countryCodesWithNativeNames';
import {FlagCode} from '../types/FlagCode';
import {languageCodeWithCountryCodeRegex} from '../regex/languageCodeWithCountryCodeRegex';

export const extractCountryCode = (languageCode: LanguageCodeWithCountryCode): CountryCode =>
  languageCode.split('-')[1] as CountryCode;

export const extractLanguageCode = (languageCode: LanguageCodeWithCountryCode): LanguageCode =>
  languageCode.split('-')[0] as LanguageCode;

export const getLanguageData = (code: LanguageCode | LanguageCodeWithCountryCode): Language => {
  const languageCode = languageCodeWithCountryCodeRegex.test(code as string)
    ? extractLanguageCode(code as LanguageCodeWithCountryCode)
    : code as LanguageCode;
  return languages[languageCode];
}

export const getNativeName = (code: LanguageCode | LanguageCodeWithCountryCode): string =>
  getLanguageData(code).nativeName;

export const getNativeCountryName = (languageCode: LanguageCodeWithCountryCode): string =>
  countryCodesWithNativeNames[extractCountryCode(languageCode)];

export const sortLanguagesByMatch = (languages: (LanguageCode | LanguageCodeWithCountryCode)[], search: string): (LanguageCode | LanguageCodeWithCountryCode)[] =>
  languages
    .map(code => ({code: code as string, nativeName: getNativeName(code)}))
    .sort(compareByKeys(['nativeName', 'code'], compareMatch(search)))
    .map(({code}) => code as LanguageCode | LanguageCodeWithCountryCode);

export const findFlagCodeFromLanguageCode = (code: LanguageCode | LanguageCodeWithCountryCode): FlagCode => {
  if (languageCodeWithCountryCodeRegex.test(code as string)) {
    const castedCode = code as LanguageCodeWithCountryCode;
    const {overrideFlag} = getLanguageData(castedCode);
    if (typeof overrideFlag === 'string') {
      return overrideFlag;
    } else {
      const countryCode = extractCountryCode(castedCode);
      return overrideFlag?.[countryCode] ?? extractCountryCode(castedCode).toLowerCase() as FlagCode ?? 'xx';
    }
  } else {
    return languages[code as LanguageCode]?.defaultFlag ?? 'xx';
  }
}
