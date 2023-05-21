import {capitalize} from './stringUtils';

describe('stringUtils', () => {
  it('Capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});