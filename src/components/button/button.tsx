import classNames from 'classnames/bind';
import styles from '@/components/button/button.module.css';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

type ButtonColor = 'gradient' | 'outline' | 'ghost';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

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

