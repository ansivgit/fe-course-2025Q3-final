import styles from '@/components/button/button.module.css';

import classNames from 'classnames/bind';
import type { MouseEventHandler, ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

type ButtonColor = 'gradient' | 'outline' | 'ghost';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
  disabled?: boolean;
};

export const Button = ({
  children,
  className,
  type = 'button',
  color = 'gradient',
  size = 'medium',
  isActive = false,
  disabled = false,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      type={type}
      className={cx('button', color, size, { active: isActive }, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
