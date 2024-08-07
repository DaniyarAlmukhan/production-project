import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('just render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('5');
  });

  test('test increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('6');
  });
  test('test decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('4');
  });
});
