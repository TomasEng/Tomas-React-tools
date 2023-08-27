import {Language} from '../types/Language';
import {KeyValuePairs} from '../types/KeyValuePairs';

export const languages: KeyValuePairs<Language> = {
  af: {
    code: 'af',
    nativeName: 'Afrikaans',
    countries: ['ZA'],
    defaultFlag: 'za'
  },
  ar: {
    code: 'ar',
    nativeName: 'العربية',
    countries: ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'QA', 'SA', 'SY', 'TN', 'YE'],
    defaultFlag: 'arab'
  },
  az: {
    code: 'az',
    nativeName: 'Azərbaycan dili',
    countries: ['AZ'],
    defaultFlag: 'az'
  },
  be: {
    code: 'be',
    nativeName: 'Беларуская',
    countries: ['BY'],
    defaultFlag: 'by'
  },
  bg: {
    code: 'bg',
    nativeName: 'Български',
    countries: ['BG'],
    defaultFlag: 'bg'
  },
  bn: {
    code: 'bn',
    nativeName: 'বাংলা',
    countries: ['BD', 'IN'],
    defaultFlag: 'bd'
  },
  bs: {
    code: 'bs',
    nativeName: 'Bosanski',
    countries: ['BA'],
    defaultFlag: 'ba'
  },
  ca: {
    code: 'ca',
    nativeName: 'Català',
    countries: ['AD', 'ES'],
    overrideFlag: {ES: 'es-ct'},
    defaultFlag: 'es-ct'
  },
  cs: {
    code: 'cs',
    nativeName: 'Čeština',
    countries: ['CZ'],
    defaultFlag: 'cz'
  },
  cy: {
    code: 'cy',
    nativeName: 'Cymraeg',
    countries: ['GB'],
    overrideFlag: 'gb-wls',
    defaultFlag: 'gb-wls'
  },
  da: {
    code: 'da',
    nativeName: 'Dansk',
    countries: ['DK'],
    defaultFlag: 'dk'
  },
  de: {
    code: 'de',
    nativeName: 'Deutsch',
    countries: ['AT', 'CH', 'DE', 'LI', 'LU'],
    defaultFlag: 'de'
  },
  dv: {
    code: 'dv',
    nativeName: 'ދިވެހިބަސް',
    countries: ['MV'],
    defaultFlag: 'mv'
  },
  el: {
    code: 'el',
    nativeName: 'Ελληνικά',
    countries: ['CY', 'GR'],
    defaultFlag: 'gr'
  },
  en: {
    code: 'en',
    nativeName: 'English',
    countries: ['AU', 'BZ', 'CA', 'GB', 'HK', 'IE', 'IN', 'JM', 'NZ', 'PH', 'SG', 'TT', 'US', 'ZA', 'ZW'],
    defaultFlag: 'gb'
  },
  eo: {
    code: 'eo',
    nativeName: 'Esperanto',
    countries: [],
    overrideFlag: 'eo',
    defaultFlag: 'eo'
  },
  es: {
    code: 'es',
    nativeName: 'Español',
    countries: ['AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE'],
    defaultFlag: 'es'
  },
  et: {
    code: 'et',
    nativeName: 'Eesti',
    countries: ['EE'],
    defaultFlag: 'ee'
  },
  eu: {
    code: 'eu',
    nativeName: 'Euskara',
    countries: ['ES'],
    overrideFlag: 'es-pv',
    defaultFlag: 'es-pv'
  },
  fa: {
    code: 'fa',
    nativeName: 'فارسی',
    countries: ['IR'],
    defaultFlag: 'ir'
  },
  fi: {
    code: 'fi',
    nativeName: 'Suomi',
    countries: ['FI'],
    defaultFlag: 'fi'
  },
  fj: {
    code: 'fj',
    nativeName: 'Vosa Vakaviti',
    countries: ['FJ'],
    defaultFlag: 'fj'
  },
  fo: {
    code: 'fo',
    nativeName: 'Føroyskt',
    countries: ['FO'],
    defaultFlag: 'fo'
  },
  fr: {
    code: 'fr',
    nativeName: 'Français',
    countries: ['BE', 'CA', 'CH', 'FR', 'LU', 'MC'],
    defaultFlag: 'fr'
  },
  fy: {
    code: 'fy',
    nativeName: 'Frysk',
    countries: ['NL'],
    defaultFlag: 'nl'
  },
  ga: {
    code: 'ga',
    nativeName: 'Gaeilge',
    countries: ['IE'],
    defaultFlag: 'ie'
  },
  gd: {
    code: 'gd',
    nativeName: 'Gàidhlig',
    countries: ['GB'],
    overrideFlag: 'gb-sct',
    defaultFlag: 'gb-sct'
  },
  gl: {
    code: 'gl',
    nativeName: 'Galego',
    countries: ['ES'],
    overrideFlag: 'es-ga',
    defaultFlag: 'es-ga'
  },
  gn: {
    code: 'gn',
    nativeName: 'Avañe\'ẽ',
    countries: ['PY'],
    defaultFlag: 'py'
  },
  gu: {
    code: 'gu',
    nativeName: 'ગુજરાતી',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  he: {
    code: 'he',
    nativeName: 'עברית',
    countries: ['IL'],
    defaultFlag: 'il'
  },
  hi: {
    code: 'hi',
    nativeName: 'हिन्दी',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  hr: {
    code: 'hr',
    nativeName: 'Hrvatski',
    countries: ['BA', 'HR'],
    defaultFlag: 'hr'
  },
  hu: {
    code: 'hu',
    nativeName: 'Magyar',
    countries: ['HU'],
    defaultFlag: 'hu'
  },
  hy: {
    code: 'hy',
    nativeName: 'Հայերեն',
    countries: ['AM'],
    defaultFlag: 'am'
  },
  id: {
    code: 'id',
    nativeName: 'Bahasa Indonesia',
    countries: ['ID'],
    defaultFlag: 'id'
  },
  is: {
    code: 'is',
    nativeName: 'Íslenska',
    countries: ['IS'],
    defaultFlag: 'is'
  },
  it: {
    code: 'it',
    nativeName: 'Italiano',
    countries: ['CH', 'IT'],
    defaultFlag: 'it'
  },
  ja: {
    code: 'ja',
    nativeName: '日本語',
    countries: ['JP'],
    defaultFlag: 'jp'
  },
  ka: {
    code: 'ka',
    nativeName: 'ქართული',
    countries: ['GE'],
    defaultFlag: 'ge'
  },
  kk: {
    code: 'kk',
    nativeName: 'Қазақ',
    countries: ['KZ'],
    defaultFlag: 'kz'
  },
  kl: {
    code: 'kl',
    nativeName: 'Kalaallisut',
    countries: ['GL'],
    defaultFlag: 'gl'
  },
  km: {
    code: 'km',
    nativeName: 'ភាសាខ្មែរ',
    countries: ['KH'],
    defaultFlag: 'kh'
  },
  kn: {
    code: 'kn',
    nativeName: 'ಕನ್ನಡ',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  ko: {
    code: 'ko',
    nativeName: '한국어',
    countries: ['KR'],
    defaultFlag: 'kr'
  },
  kok: {
    code: 'kok',
    nativeName: 'कोंकणी',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  ky: {
    code: 'ky',
    nativeName: 'Кыргыз',
    countries: ['KG'],
    defaultFlag: 'kg'
  },
  lb: {
    code: 'lb',
    nativeName: 'Lëtzebuergesch',
    countries: ['LU'],
    defaultFlag: 'lu'
  },
  lo: {
    code: 'lo',
    nativeName: 'ລາວ',
    countries: ['LA'],
    defaultFlag: 'la'
  },
  lt: {
    code: 'lt',
    nativeName: 'Lietuvių',
    countries: ['LT'],
    defaultFlag: 'lt'
  },
  lv: {
    code: 'lv',
    nativeName: 'Latviešu',
    countries: ['LV'],
    defaultFlag: 'lv'
  },
  mi: {
    code: 'mi',
    nativeName: 'Māori',
    countries: ['NZ'],
    defaultFlag: 'nz'
  },
  mk: {
    code: 'mk',
    nativeName: 'Македонски',
    countries: ['MK'],
    defaultFlag: 'mk'
  },
  ml: {
    code: 'ml',
    nativeName: 'മലയാളം',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  mn: {
    code: 'mn',
    nativeName: 'Монгол',
    countries: ['MN'],
    defaultFlag: 'mn'
  },
  mr: {
    code: 'mr',
    nativeName: 'मराठी',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  ms: {
    code: 'ms',
    nativeName: 'Bahasa Melayu',
    countries: ['BN', 'MY'],
    defaultFlag: 'my'
  },
  mt: {
    code: 'mt',
    nativeName: 'Malti',
    countries: ['MT'],
    defaultFlag: 'mt'
  },
  nb: {
    code: 'nb',
    nativeName: 'Norsk bokmål',
    countries: ['NO'],
    defaultFlag: 'no'
  },
  nl: {
    code: 'nl',
    nativeName: 'Nederlands',
    countries: ['AW', 'BE', 'NL', 'SR'],
    defaultFlag: 'nl'
  },
  nn: {
    code: 'nn',
    nativeName: 'Nynorsk',
    countries: ['NO'],
    defaultFlag: 'no'
  },
  ns: {
    code: 'ns',
    nativeName: 'Sesotho sa Leboa',
    countries: ['ZA'],
    defaultFlag: 'za'
  },
  pa: {
    code: 'pa',
    nativeName: 'ਪੰਜਾਬੀ',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  pl: {
    code: 'pl',
    nativeName: 'Polski',
    countries: ['PL'],
    defaultFlag: 'pl'
  },
  ps: {
    code: 'ps',
    nativeName: 'پښتو',
    countries: ['AF'],
    defaultFlag: 'af'
  },
  pt: {
    code: 'pt',
    nativeName: 'Português',
    countries: ['BR', 'MO', 'PT', 'ST'],
    defaultFlag: 'pt'
  },
  qu: {
    code: 'qu',
    nativeName: 'Runa Simi',
    countries: ['BO', 'EC', 'PE'],
    defaultFlag: 'pe'
  },
  rm: {
    code: 'rm',
    nativeName: 'Rumantsch',
    countries: ['CH'],
    defaultFlag: 'ch'
  },
  ro: {
    code: 'ro',
    nativeName: 'Română',
    countries: ['RO'],
    defaultFlag: 'ro'
  },
  ru: {
    code: 'ru',
    nativeName: 'Русский',
    countries: ['RU'],
    defaultFlag: 'ru'
  },
  rw: {
    code: 'rw',
    nativeName: 'Kinyarwanda',
    countries: ['RW'],
    defaultFlag: 'rw'
  },
  sa: {
    code: 'sa',
    nativeName: 'संस्कृत',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  se: {
    code: 'se',
    nativeName: 'Davvisámegiella',
    countries: ['NO', 'FI', 'SE'],
    overrideFlag: 'sami',
    defaultFlag: 'sami'
  },
  smj: {
    code: 'smj',
    nativeName: 'Julevsámegiella',
    countries: ['NO', 'SE'],
    overrideFlag: 'sami',
    defaultFlag: 'sami'
  },
  smn: {
    code: 'smn',
    nativeName: 'Anarâškielâ',
    countries: ['FI'],
    overrideFlag: 'sami',
    defaultFlag: 'sami'
  },
  si: {
    code: 'si',
    nativeName: 'සිංහල',
    countries: ['LK'],
    defaultFlag: 'lk'
  },
  sk: {
    code: 'sk',
    nativeName: 'Slovenčina',
    countries: ['SK'],
    defaultFlag: 'sk'
  },
  sl: {
    code: 'sl',
    nativeName: 'Slovenščina',
    countries: ['SI'],
    defaultFlag: 'si'
  },
  sq: {
    code: 'sq',
    nativeName: 'Shqip',
    countries: ['AL'],
    defaultFlag: 'al'
  },
  sr: {
    code: 'sr',
    nativeName: 'Српски',
    countries: ['BA', 'ME', 'RS'],
    defaultFlag: 'rs'
  },
  sv: {
    code: 'sv',
    nativeName: 'Svenska',
    countries: ['FI', 'SE'],
    defaultFlag: 'se'
  },
  sw: {
    code: 'sw',
    nativeName: 'Kiswahili',
    countries: ['KE', 'TZ'],
    defaultFlag: 'eac'
  },
  syr: {
    code: 'syr',
    nativeName: 'ܣܘܪܝܝܐ',
    countries: ['SY'],
    defaultFlag: 'sy'
  },
  ta: {
    code: 'ta',
    nativeName: 'தமிழ்',
    countries: ['IN', 'LK'],
    defaultFlag: 'lk'
  },
  te: {
    code: 'te',
    nativeName: 'తెలుగు',
    countries: ['IN'],
    defaultFlag: 'in'
  },
  th: {
    code: 'th',
    nativeName: 'ไทย',
    countries: ['TH'],
    defaultFlag: 'th'
  },
  tl: {
    code: 'tl',
    nativeName: 'Tagalog',
    countries: ['PH'],
    defaultFlag: 'ph'
  },
  tn: {
    code: 'tn',
    nativeName: 'Setswana',
    countries: ['BW', 'ZA'],
    defaultFlag: 'bw'
  },
  tr: {
    code: 'tr',
    nativeName: 'Türkçe',
    countries: ['CY', 'TR'],
    defaultFlag: 'tr'
  },
  ts: {
    code: 'ts',
    nativeName: 'Xitsonga',
    countries: ['ZA'],
    defaultFlag: 'za'
  },
  tt: {
    code: 'tt',
    nativeName: 'Татарча',
    countries: ['RU'],
    defaultFlag: 'ru'
  },
  uk: {
    code: 'uk',
    nativeName: 'Українська',
    countries: ['UA'],
    defaultFlag: 'ua'
  },
  ur: {
    code: 'ur',
    nativeName: 'اردو',
    countries: ['IN', 'PK'],
    defaultFlag: 'pk',
  },
  uz: {
    code: 'uz',
    nativeName: 'Ўзбек',
    countries: ['UZ'],
    defaultFlag: 'uz'
  },
  vi: {
    code: 'vi',
    nativeName: 'Tiếng Việt',
    countries: ['VN'],
    defaultFlag: 'vn'
  },
  xh: {
    code: 'xh',
    nativeName: 'isiXhosa',
    countries: ['ZA'],
    defaultFlag: 'za'
  },
  zh: {
    code: 'zh',
    nativeName: '中文',
    countries: ['CN', 'HK', 'MO', 'SG', 'TW'],
    defaultFlag: 'cn'
  },
  zu: {
    code: 'zu',
    nativeName: 'isiZulu',
    countries: ['ZA'],
    defaultFlag: 'za'
  }
};