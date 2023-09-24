import {
  compareByKey,
  compareByKeys,
  CompareFunction,
  compareLength,
  compareMatch,
  compareMatchingRatio,
} from './compareFunctions';

describe('compareFunctions', () => {

  describe('compareMatchingRatio', () => {
    it.each([
      ['abcd', 'abcde', 'abc'],
      ['dcba', 'edcba', 'abc'],
    ])('Sorts "%s" before "%s" when search string is "%s"', (a, b, search) => {
      const compare = compareMatchingRatio(search);
      expect(compare(a, b)).toBeLessThan(0);
      expect(compare(b, a)).toBeGreaterThan(0);
    });

    it('Is case insensitive', () => {
      const compare = compareMatchingRatio('abc');
      expect(compare('ABC', 'abc')).toBe(0);
    });
  });

  describe('compareLength', () => {
    it.each([
      ['abc', 'abcde'],
      ['Lipsum', 'Lorem ipsum'],
    ])('Sorts "%s" before "%s"', (a, b) => {
      expect(compareLength(a, b)).toBeLessThan(0);
      expect(compareLength(b, a)).toBeGreaterThan(0);
    });
  });

  describe('compareMatch', () => {
    it.each([
      ['abc', 'cba', 'abc'],
      ['abc', 'cabc', 'abc'],
      ['abd', 'a', 'abc'],
      ['What does the fox say?', 'The quick brown fox', 'fox'],
      ['The quick brown fox', 'What does the fox say?', 'the fox'],
    ])('Sorts "%s" before "%s" when search string is "%s"', (a, b, search) => {
      const compare = compareMatch(search);
      expect(compare(a, b)).toBeLessThan(0);
      expect(compare(b, a)).toBeGreaterThan(0);
    });

    it.each([
      ['abc', 'abc', 'abc'],
      ['abcd', 'abce', 'abc'],
      ['-a-b-c-', '.a.b.c.', 'abc'],
    ])(
      'Treats "%s" and "%s" as equivalent when search string is "%s"',
      (a, b, search) => {
        const compare = compareMatch(search);
        expect(compare(a, b)).toBe(0);
      },
    );
  });

  describe('compareByKey', () => {
    it('Returns the given compare function applied to the key of the given object', () => {
      const compare: CompareFunction<number> = (a, b) => a - b;
      type TestType = { keyOfInterest: number; anotherKey: string };
      const result = compareByKey<TestType, 'keyOfInterest'>('keyOfInterest', compare);
      const a: TestType = {keyOfInterest: 1, anotherKey: 'def'};
      const b: TestType = {keyOfInterest: 2, anotherKey: 'def'};
      const c: TestType = {keyOfInterest: 3, anotherKey: 'def'};
      expect(result(a, b)).toEqual(compare(a.keyOfInterest, b.keyOfInterest));
      expect(result(a, c)).toEqual(compare(a.keyOfInterest, c.keyOfInterest));
      expect(result(b, a)).toEqual(compare(b.keyOfInterest, a.keyOfInterest));
      expect(result(b, c)).toEqual(compare(b.keyOfInterest, c.keyOfInterest));
      expect(result(c, a)).toEqual(compare(c.keyOfInterest, a.keyOfInterest));
      expect(result(c, b)).toEqual(compare(c.keyOfInterest, b.keyOfInterest));
    });
  });

  describe('compareByKeys', () => {

    const compare: CompareFunction<number> = (a, b) => a - b;
    type TestType = { firstKeyOfInterest: number; secondKeyOfInterest: number, anotherKey: string };
    const result = compareByKeys<TestType, 'firstKeyOfInterest' | 'secondKeyOfInterest'>(['firstKeyOfInterest', 'secondKeyOfInterest'], compare);

    it('Returns the given compare function applied to the first given key if the result is not 0', () => {
      const a: TestType = {firstKeyOfInterest: 1, secondKeyOfInterest: 1, anotherKey: 'def'};
      const b: TestType = {firstKeyOfInterest: 2, secondKeyOfInterest: 1, anotherKey: 'def'};
      const c: TestType = {firstKeyOfInterest: 3, secondKeyOfInterest: 2, anotherKey: 'def'};
      expect(result(a, b)).toEqual(compare(a.firstKeyOfInterest, b.firstKeyOfInterest));
      expect(result(a, c)).toEqual(compare(a.firstKeyOfInterest, c.firstKeyOfInterest));
      expect(result(b, a)).toEqual(compare(b.firstKeyOfInterest, a.firstKeyOfInterest));
      expect(result(b, c)).toEqual(compare(b.firstKeyOfInterest, c.firstKeyOfInterest));
      expect(result(c, a)).toEqual(compare(c.firstKeyOfInterest, a.firstKeyOfInterest));
      expect(result(c, b)).toEqual(compare(c.firstKeyOfInterest, b.firstKeyOfInterest));
    });

    it('Returns the given compare function applied to the second given key if the result of the function applied to the first is 0', () => {
      const firstKeyOfInterest = 1;
      const a: TestType = {firstKeyOfInterest, secondKeyOfInterest: 1, anotherKey: 'def'};
      const b: TestType = {firstKeyOfInterest, secondKeyOfInterest: 2, anotherKey: 'def'};
      const c: TestType = {firstKeyOfInterest, secondKeyOfInterest: 3, anotherKey: 'def'};
      expect(result(a, b)).toEqual(compare(a.secondKeyOfInterest, b.secondKeyOfInterest));
      expect(result(a, c)).toEqual(compare(a.secondKeyOfInterest, c.secondKeyOfInterest));
      expect(result(b, a)).toEqual(compare(b.secondKeyOfInterest, a.secondKeyOfInterest));
      expect(result(b, c)).toEqual(compare(b.secondKeyOfInterest, c.secondKeyOfInterest));
      expect(result(c, a)).toEqual(compare(c.secondKeyOfInterest, a.secondKeyOfInterest));
      expect(result(c, b)).toEqual(compare(c.secondKeyOfInterest, b.secondKeyOfInterest));
    });

    it('Returns 0 if the result of the function applied to all given keys is 0', () => {
      const firstKeyOfInterest = 1;
      const secondKeyOfInterest = 1;
      const a: TestType = {firstKeyOfInterest, secondKeyOfInterest, anotherKey: 'abc'};
      const b: TestType = {firstKeyOfInterest, secondKeyOfInterest, anotherKey: 'def'};
      expect(result(a, b)).toEqual(0);
    });
  });
});
