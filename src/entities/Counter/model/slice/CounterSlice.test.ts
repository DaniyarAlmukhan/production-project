import { counterReducer, counterActions } from './CounterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 5,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 4,
    });
  });

  test('increment', () => {
    const state: CounterSchema = {
      value: 5,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 6,
    });
  });
  test('with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
