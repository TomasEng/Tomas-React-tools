import {buildCompareFunction} from './buildCompareFunction';

describe('buildCompareFunction', () => {

  it('Returns 0 if chain is empty', () => {
    const result = buildCompareFunction([]);
    expect(result(1, 2)).toEqual(0);
  });

  it('Works with one function', () => {
    const simpleFn = (a: number, b: number) => a - b;
    const result = buildCompareFunction([simpleFn]);
    expect(result(1, 2)).toEqual(-1);
  });

  it('Works with a chain of functions', () => {
    type TestObject = { a: number, b: number, c: number };
    const fn1 = (a: TestObject, b: TestObject) => a.a - b.a;
    const fn2 = (a: TestObject, b: TestObject) => a.b - b.b;
    const fn3 = (a: TestObject, b: TestObject) => a.c - b.c;
    const result = buildCompareFunction([fn1, fn2, fn3]);
    expect(result({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3})).toEqual(0);
    expect(result({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 4})).toEqual(-1);
    expect(result({a: 1, b: 2, c: 4}, {a: 1, b: 2, c: 3})).toEqual(1);
    expect(result({a: 1, b: 2, c: 3}, {a: 1, b: 3, c: 3})).toEqual(-1);
    expect(result({a: 1, b: 3, c: 3}, {a: 1, b: 2, c: 3})).toEqual(1);
    expect(result({a: 1, b: 2, c: 3}, {a: 2, b: 2, c: 3})).toEqual(-1);
    expect(result({a: 2, b: 2, c: 3}, {a: 1, b: 2, c: 3})).toEqual(1);
    expect(result({a: 2, b: 1, c: 1}, {a: 1, b: 1, c: 1})).toEqual(1);
  });
});