import {containsAllCharsInOrder} from './stringUtils';

export const matchArray = (array: string[], search: string): boolean =>
  array.some(item => containsAllCharsInOrder(search, item));