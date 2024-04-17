import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  // OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}
export const Button: FC<ButtonProps> = ({
  className, children, theme = '', square = false, size = ButtonSize.M, ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
