import { toCapitalize } from './index.js';

const testData = {
  test1: {
    str: 'en',
    expectedStr: 'En',
  },

  test2: {
    str: 'ru',
    expectedStr: 'Ru',
  },

  test3: {
    str: 'data',
    expectedStr: 'Data',
  },
};

describe('toCapitalize', () => {
  test('Unit test1', () => {
    const test1 = testData.test1;
    const str = toCapitalize(test1.str);
    expect(str).toEqual(test1.expectedStr);
  });

  test('Unit test2', () => {
    const test2 = testData.test2;
    const str = toCapitalize(test2.str);
    expect(str).toEqual(test2.expectedStr);
  });

  test('Unit test3', () => {
    const test3 = testData.test3;
    const str = toCapitalize(test3.str);
    expect(str).toEqual(test3.expectedStr);
  });
});

