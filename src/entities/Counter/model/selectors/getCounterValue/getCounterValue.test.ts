import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 5,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(5);
  });
});
