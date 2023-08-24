import {Language} from '../types/Language';

export const languages: {
  [T in string]: Language<T>
} = {
  af: {
    code: 'af',
    nativeName: 'Afrikaans',
    countries: ['ZA']
  },
  ar: {
    code: 'ar',
    nativeName: 'العربية',
    countries: ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'QA', 'SA', 'SY', 'TN', 'YE']
  },
  az: {
    code: 'az',
    nativeName: 'Azərbaycan dili',
    countries: ['AZ']
  },
  be: {
    code: 'be',
    nativeName: 'Беларуская',
    countries: ['BY']
  },
  bg: {
    code: 'bg',
    nativeName: 'Български',
    countries: ['BG']
  },
  bn: {
    code: 'bn',
    nativeName: 'বাংলা',
    countries: ['BD', 'IN']
  },
  bs: {
    code: 'bs',
    nativeName: 'Bosanski',
    countries: ['BA']
  },
  ca: {
    code: 'ca',
    nativeName: 'Català',
    countries: ['AD', 'ES']
  },
  cs: {
    code: 'cs',
    nativeName: 'Čeština',
    countries: ['CZ']
  },
  cy: {
    code: 'cy',
    nativeName: 'Cymraeg',
    countries: ['GB']
  },
  da: {
    code: 'da',
    nativeName: 'Dansk',
    countries: ['DK']
  },
  de: {
    code: 'de',
    nativeName: 'Deutsch',
    countries: ['AT', 'CH', 'DE', 'LI', 'LU']
  },
  dv: {
    code: 'dv',
    nativeName: 'ދިވެހިބަސް',
    countries: ['MV']
  },
  el: {
    code: 'el',
    nativeName: 'Ελληνικά',
    countries: ['CY', 'GR']
  },
  en: {
    code: 'en',
    nativeName: 'English',
    countries: ['AU', 'BZ', 'CA', 'GB', 'HK', 'IE', 'IN', 'JM', 'NZ', 'PH', 'SG', 'TT', 'US', 'ZA', 'ZW']
  },
  eo: {
    code: 'eo',
    nativeName: 'Esperanto',
    countries: []
  },
  es: {
    code: 'es',
    nativeName: 'Español',
    countries: ['AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE']
  },
  et: {
    code: 'et',
    nativeName: 'Eesti',
    countries: ['EE']
  },
  eu: {
    code: 'eu',
    nativeName: 'Euskara',
    countries: ['ES']
  },
  fa: {
    code: 'fa',
    nativeName: 'فارسی',
    countries: ['IR']
  },
  fi: {
    code: 'fi',
    nativeName: 'Suomi',
    countries: ['FI']
  },
  fj: {
    code: 'fj',
    nativeName: 'Vosa Vakaviti',
    countries: ['FJ']
  },
  fo: {
    code: 'fo',
    nativeName: 'Føroyskt',
    countries: ['FO']
  },
  fr: {
    code: 'fr',
    nativeName: 'Français',
    countries: ['BE', 'CA', 'CH', 'FR', 'LU', 'MC']
  },
  fy: {
    code: 'fy',
    nativeName: 'Frysk',
    countries: ['NL']
  },
  ga: {
    code: 'ga',
    nativeName: 'Gaeilge',
    countries: ['IE']
  },
  gd: {
    code: 'gd',
    nativeName: 'Gàidhlig',
    countries: ['GB']
  },
  gl: {
    code: 'gl',
    nativeName: 'Galego',
    countries: ['ES']
  },
  gn: {
    code: 'gn',
    nativeName: 'Avañe\'ẽ',
    countries: ['PY']
  },
  gu: {
    code: 'gu',
    nativeName: 'ગુજરાતી',
    countries: ['IN']
  },
  he: {
    code: 'he',
    nativeName: 'עברית',
    countries: ['IL']
  },
  hi: {
    code: 'hi',
    nativeName: 'हिन्दी',
    countries: ['IN']
  },
  hr: {
    code: 'hr',
    nativeName: 'Hrvatski',
    countries: ['BA', 'HR']
  },
  hu: {
    code: 'hu',
    nativeName: 'Magyar',
    countries: ['HU']
  },
  hy: {
    code: 'hy',
    nativeName: 'Հայերեն',
    countries: ['AM']
  },
  id: {
    code: 'id',
    nativeName: 'Bahasa Indonesia',
    countries: ['ID']
  },
  is: {
    code: 'is',
    nativeName: 'Íslenska',
    countries: ['IS']
  },
  it: {
    code: 'it',
    nativeName: 'Italiano',
    countries: ['CH', 'IT']
  },
  ja: {
    code: 'ja',
    nativeName: '日本語',
    countries: ['JP']
  },
  ka: {
    code: 'ka',
    nativeName: 'ქართული',
    countries: ['GE']
  },
  kk: {
    code: 'kk',
    nativeName: 'Қазақ',
    countries: ['KZ']
  },
  kl: {
    code: 'kl',
    nativeName: 'Kalaallisut',
    countries: ['GL']
  },
  km: {
    code: 'km',
    nativeName: 'ភាសាខ្មែរ',
    countries: ['KH']
  },
  kn: {
    code: 'kn',
    nativeName: 'ಕನ್ನಡ',
    countries: ['IN']
  },
  ko: {
    code: 'ko',
    nativeName: '한국어',
    countries: ['KR']
  },
  kok: {
    code: 'kok',
    nativeName: 'कोंकणी',
    countries: ['IN']
  },
  ky: {
    code: 'ky',
    nativeName: 'Кыргыз',
    countries: ['KG']
  },
  lb: {
    code: 'lb',
    nativeName: 'Lëtzebuergesch',
    countries: ['LU']
  },
  lo: {
    code: 'lo',
    nativeName: 'ລາວ',
    countries: ['LA']
  },
  lt: {
    code: 'lt',
    nativeName: 'Lietuvių',
    countries: ['LT']
  },
  lv: {
    code: 'lv',
    nativeName: 'Latviešu',
    countries: ['LV']
  },
  mi: {
    code: 'mi',
    nativeName: 'Māori',
    countries: ['NZ']
  },
  mk: {
    code: 'mk',
    nativeName: 'Македонски',
    countries: ['MK']
  },
  ml: {
    code: 'ml',
    nativeName: 'മലയാളം',
    countries: ['IN']
  },
  mn: {
    code: 'mn',
    nativeName: 'Монгол',
    countries: ['MN']
  },
  mr: {
    code: 'mr',
    nativeName: 'मराठी',
    countries: ['IN']
  },
  ms: {
    code: 'ms',
    nativeName: 'Bahasa Melayu',
    countries: ['BN', 'MY']
  },
  mt: {
    code: 'mt',
    nativeName: 'Malti',
    countries: ['MT']
  },
  nb: {
    code: 'nb',
    nativeName: 'Norsk bokmål',
    countries: ['NO']
  },
  nl: {
    code: 'nl',
    nativeName: 'Nederlands',
    countries: ['AW', 'BE', 'NL', 'SR']
  },
  nn: {
    code: 'nn',
    nativeName: 'Nynorsk',
    countries: ['NO']
  },
  ns: {
    code: 'ns',
    nativeName: 'Sesotho sa Leboa',
    countries: ['ZA']
  },
  pa: {
    code: 'pa',
    nativeName: 'ਪੰਜਾਬੀ',
    countries: ['IN']
  },
  pl: {
    code: 'pl',
    nativeName: 'Polski',
    countries: ['PL']
  },
  ps: {
    code: 'ps',
    nativeName: 'پښتو',
    countries: ['AF']
  },
  pt: {
    code: 'pt',
    nativeName: 'Português',
    countries: ['BR', 'MO', 'PT', 'ST']
  },
  qu: {
    code: 'qu',
    nativeName: 'Runa Simi',
    countries: ['BO', 'EC', 'PE']
  },
  rm: {
    code: 'rm',
    nativeName: 'Rumantsch',
    countries: ['CH']
  },
  ro: {
    code: 'ro',
    nativeName: 'Română',
    countries: ['RO']
  },
  ru: {
    code: 'ru',
    nativeName: 'Русский',
    countries: ['RU']
  },
  rw: {
    code: 'rw',
    nativeName: 'Kinyarwanda',
    countries: ['RW']
  },
  sa: {
    code: 'sa',
    nativeName: 'संस्कृत',
    countries: ['IN']
  },
  se: {
    code: 'se',
    nativeName: 'Davvisámegiella',
    countries: ['NO', 'FI', 'SE']
  },
  si: {
    code: 'si',
    nativeName: 'සිංහල',
    countries: ['LK']
  },
  sk: {
    code: 'sk',
    nativeName: 'Slovenčina',
    countries: ['SK']
  },
  sl: {
    code: 'sl',
    nativeName: 'Slovenščina',
    countries: ['SI']
  },
  sq: {
    code: 'sq',
    nativeName: 'Shqip',
    countries: ['AL']
  },
  sr: {
    code: 'sr',
    nativeName: 'Српски',
    countries: ['BA', 'ME', 'RS']
  },
  sv: {
    code: 'sv',
    nativeName: 'Svenska',
    countries: ['FI', 'SE']
  },
  sw: {
    code: 'sw',
    nativeName: 'Kiswahili',
    countries: ['KE', 'TZ']
  },
  syr: {
    code: 'syr',
    nativeName: 'ܣܘܪܝܝܐ',
    countries: ['SY']
  },
  ta: {
    code: 'ta',
    nativeName: 'தமிழ்',
    countries: ['IN', 'LK']
  },
  te: {
    code: 'te',
    nativeName: 'తెలుగు',
    countries: ['IN']
  },
  th: {
    code: 'th',
    nativeName: 'ไทย',
    countries: ['TH']
  },
  tl: {
    code: 'tl',
    nativeName: 'Tagalog',
    countries: ['PH']
  },
  tn: {
    code: 'tn',
    nativeName: 'Setswana',
    countries: ['BW', 'ZA']
  },
  tr: {
    code: 'tr',
    nativeName: 'Türkçe',
    countries: ['CY', 'TR']
  },
  ts: {
    code: 'ts',
    nativeName: 'Xitsonga',
    countries: ['ZA']
  },
  tt: {
    code: 'tt',
    nativeName: 'Татарча',
    countries: ['RU']
  },
  uk: {
    code: 'uk',
    nativeName: 'Українська',
    countries: ['UA']
  },
  ur: {
    code: 'ur',
    nativeName: 'اردو',
    countries: ['IN', 'PK']
  },
  uz: {
    code: 'uz',
    nativeName: 'Ўзбек',
    countries: ['UZ']
  },
  vi: {
    code: 'vi',
    nativeName: 'Tiếng Việt',
    countries: ['VN']
  },
  xh: {
    code: 'xh',
    nativeName: 'isiXhosa',
    countries: ['ZA']
  },
  zh: {
    code: 'zh',
    nativeName: '中文',
    countries: ['CN', 'HK', 'MO', 'SG', 'TW']
  },
  zu: {
    code: 'zu',
    nativeName: 'isiZulu',
    countries: ['ZA']
  }
};