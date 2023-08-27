import {languages} from './languages';

describe('languages', () => {
  test('All codes are the same as the keys', () => {
    Object.entries(languages).forEach(([key, value]) => {
      expect(key).toBe(value.code);
    });
  });
});