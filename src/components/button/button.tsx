import classNames from 'classnames/bind';
import styles from '@/components/button/button.module.css';

import type { ButtonProps } from '@/types/index';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

export const Button = ({
  children,
  className,
  color = 'gradient',
  size = 'medium',
  disabled = false,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      className={cx(
        'button',
        `button--color--${color}`,
        `button--size--${size}`,
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

