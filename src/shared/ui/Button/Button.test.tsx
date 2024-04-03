import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('just render', () => {
    render(<Button>123</Button>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });
  test('render with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>123</Button>);
    expect(screen.getByText('123')).toHaveClass('clear');
    // screen.debug();
  });
});
