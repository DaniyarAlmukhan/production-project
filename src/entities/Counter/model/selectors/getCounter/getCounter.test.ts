import { DeepPartial } from 'redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('counter', () => {
  test('should return the value of the counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 5,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 5 });
  });
});
