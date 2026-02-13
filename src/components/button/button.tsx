import classNames from 'classnames/bind';
import styles from '@/components/button/button.module.css';
import type { MouseEventHandler, ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

type ButtonColor = 'gradient' | 'outline' | 'ghost';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  color = 'gradient',
  size = 'medium',
  selected = false,
  disabled = false,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      className={cx(
        'button',
        color,
        size,
        { selected },
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

