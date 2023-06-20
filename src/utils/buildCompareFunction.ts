import {CompareFunction} from './compareFunctions';

export const buildCompareFunction = <T>(functions: CompareFunction<T>[]) =>
  (a: T, b: T) => {
    for (const fn of functions) {
      const result = fn(a, b);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  };