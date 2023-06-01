import {matchArray} from './arrayUtils';

describe('arrayUtils', () => {
  describe('matchArray', () => {
    it('Returns true if the array contains an item that matches the search', () => {
      const testArray = ['foo', 'bar', 'baz'];
      expect(matchArray(testArray, 'foo')).toEqual(true);
      expect(matchArray(testArray, 'bar')).toEqual(true);
      expect(matchArray(testArray, 'ba')).toEqual(true);
      expect(matchArray(testArray, 'oo')).toEqual(true);
    });

    it('Returns false if the array does not contain an item that matches the search', () => {
      const testArray = ['foo', 'bar', 'baz'];
      expect(matchArray(testArray, 'qux')).toEqual(false);
      expect(matchArray(testArray, 'qu')).toEqual(false);
      expect(matchArray(testArray, 'x')).toEqual(false);
    });
  });
});