import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  // CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  // OUTLINE_RED = 'outline_red',
  // BACKGROUND = 'background',
  // BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}
export const Button: FC<ButtonProps> = ({
  className, children, theme = '', ...otherProps
}) => (

  <button
    className={classNames(cls.Button, {}, [className, cls[theme]])}
    type="button"
    {...otherProps}
  >
    {children}
  </button>
);
