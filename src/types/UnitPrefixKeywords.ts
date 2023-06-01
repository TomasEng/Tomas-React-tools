import {Prefix} from 'enheter';

export type UnitPrefixKeywords = {
  [P in Exclude<Prefix, null>]: string[];
};