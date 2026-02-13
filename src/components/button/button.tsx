import classNames from 'classnames';
import styles from './button.module.css';

import type { ButtonProps } from '@/types/index';
import type { ReactElement } from 'react';

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
      className={classNames({
        [styles.button]: true,
        [styles[`button--color--${color}`]]: color,
        [styles[`button--size--${size}`]]: size,
        [className ?? '']: Boolean(className),
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
