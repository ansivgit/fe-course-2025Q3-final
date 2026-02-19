import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, ReactNode } from 'react';
import styles from './input.module.css';

const cx = classNames.bind(styles);

type InputProps = {
  name: string;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
};

export const Input = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange = (): void => {
    return;
  },
  className = '',
  leftIcon,
  rightIcon,
  error,
}: InputProps): ReactElement => {
  return (
    <div className={cx('input-wrapper', className)}>
      <label className={cx('input-label')}>
        {label && <span>{label}</span>}
        <div className={cx('input-field')}>
          {leftIcon && <span className={cx('input-icon', 'left')}>{leftIcon}</span>}

          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cx('input', {
              'has-left': leftIcon,
              'has-right': rightIcon,
            })}
          />

          {rightIcon && <span className={cx('input-icon', 'right')}>{rightIcon}</span>}
        </div>
      </label>
      {error && <div className={cx('error')}>{error}</div>}
    </div>
  );
};
