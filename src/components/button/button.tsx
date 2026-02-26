import classNames from 'classnames/bind';
import type { MouseEventHandler, ReactNode } from 'react';

import styles from './button.module.css';

const cx = classNames.bind(styles);

type ButtonColor = 'gradient' | 'outline' | 'ghost';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
  disabled?: boolean;
};

export const Button = ({
  children,
  className,
  color = 'gradient',
  size = 'medium',
  isActive = false,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cx('button', color, size, { active: isActive }, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
