/**
 * Compare functions to be used in conjunction with the sort method.
 * These should take two parameters and return a positive number if the first parameter should be sorted after the second,
 * a negative number if the first parameter should be sorted before the second, or 0 if there is no preference.
 */

import {containsAllCharsInOrder, matchRatio, numberOfMatchingChars} from './stringUtils';
import {buildCompareFunction} from './buildCompareFunction';

export type CompareFunction<T> = (a: T, b: T) => number;
export type SearchCompareFunction = (search: string) => CompareFunction<string>;

export const compareMatchingCharsInOrder: SearchCompareFunction =
  (search) => (a, b) => {
    const aContains: boolean = containsAllCharsInOrder(search, a);
    const bContains: boolean = containsAllCharsInOrder(search, b);
    if (!aContains && !bContains) return 0;
    if (aContains && !bContains) return -1;
    if (!aContains && bContains) return 1;

    // Both contain the search string, so compare the index of the first match.
    // If the first match index is the same, compare the second match, etc.
    let matchIndex = 0;
    for (let i = 0; i < search.length; i++) {
      const aIndex: number = a.substring(matchIndex).indexOf(search[i]);
      const bIndex: number = b.substring(matchIndex).indexOf(search[i]);
      if (aIndex < bIndex) return -1;
      if (aIndex > bIndex) return 1;
      // aIndex and bIndex are the same, so update matchIndex and continue.
      matchIndex += aIndex + 1;
    }

    // All characters match at the same place.
    return 0;
  };

export const compareNumberOfMatchingChars: SearchCompareFunction =
  (search) => (a, b) => {
    const aMatches: number = numberOfMatchingChars(search, a);
    const bMatches: number = numberOfMatchingChars(search, b);
    return bMatches - aMatches;
  };

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