import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('just render', () => {
    render(<Button>TOGGLE</Button>);
    expect(screen.getByText('TOGGLE')).toBeInTheDocument();
  });
  test('render with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TOGGLE</Button>);
    expect(screen.getByText('TOGGLE')).toHaveClass('clear');
    // screen.debug();
  });
});
