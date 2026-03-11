import classNames from 'classnames/bind';
import type { MouseEventHandler, ReactNode } from 'react';

import styles from './icon-button.module.css';

const cx = classNames.bind(styles);

type IconButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  ariaLabel: string;
};

export const IconButton = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
  className,
  ariaLabel,
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={cx('icon-button', className)}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
