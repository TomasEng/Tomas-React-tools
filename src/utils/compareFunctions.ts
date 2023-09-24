/**
 * Compare functions to be used in conjunction with the sort method.
 * These should take two parameters and return a positive number if the first parameter should be sorted after the second,
 * a negative number if the first parameter should be sorted before the second, or 0 if there is no preference.
 */

import {matchRatio} from './stringUtils';
import {buildCompareFunction} from './buildCompareFunction';
import {compareMatchingCharsInOrder} from 'sort-functions';

export type CompareFunction<T> = (a: T, b: T) => number;
export type SearchCompareFunction = (search: string) => CompareFunction<string>;

export const compareMatchingRatio: SearchCompareFunction =
  (search) => (a, b) => {
    const aRatio: number = matchRatio(search, a);
    const bRatio: number = matchRatio(search, b);
    return bRatio - aRatio;
  };

export const compareLength: CompareFunction<string> = (a, b) => a.length - b.length;

/**
 * Returns a sort function with the following strategy:
 * 1. Sort strings that contain all chars in the search string in the same order first.
 *    If the characters match at different indices, sort by the index of the first match.
 *    If those are the same, sort by the index of the second match, and so on.
 * 2. Sort by the ratio of matching characters.
 */
export const compareMatch: SearchCompareFunction = (search) =>
  buildCompareFunction([compareMatchingCharsInOrder(search), compareMatchingRatio(search)]);

/**
 * Returns the given compare function, but applied to the given key of the objects being compared.
 * @param key The key of the objects to compare.
 * @param compareFunction The compare function to apply to the key.
 * @returns The given compare function, but applied to the given key of the objects being compared.
 */
export const compareByKey = <T, K extends keyof T>(key: K, compareFunction: CompareFunction<T[K]>): CompareFunction<T> =>
  (a, b) => compareFunction(a[key], b[key]);

export const compareByKeys = <T, K extends keyof T>(keys: K[], compareFunction: CompareFunction<T[K]>): CompareFunction<T> =>
  (a, b) => {
    for (const key of keys) {
      const compared = compareFunction(a[key], b[key]);
      if (compared !== 0) return compared;
    }
    return 0;
  };