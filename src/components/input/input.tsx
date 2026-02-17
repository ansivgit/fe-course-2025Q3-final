import classNames from 'classnames/bind';
import type { ChangeEvent, FocusEvent, ReactElement, ReactNode } from 'react';
import styles from './input.module.css';

const cx = classNames.bind(styles);

type InputProps = {
  id: string;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const Input = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange = (): void => {
    return;
  },
  onBlur = (event): void => {
    console.warn('Validating email', event.target.value);
  },
  className = '',
  leftIcon,
  rightIcon,
}: InputProps): ReactElement => {
  return (
    <div className={cx('input-wrapper', className)}>
      {label && (
        <label htmlFor={id} className={cx('input-label')}>
          {label}
        </label>
      )}
      <div className={cx('input-field')}>
        {leftIcon && <span className={cx('input-icon', 'left')}>{leftIcon}</span>}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={cx('input', {
            'has-left': leftIcon,
            'has-right': rightIcon,
          })}
        />

        {rightIcon && <span className={cx('input-icon', 'right')}>{rightIcon}</span>}
      </div>
    </div>
  );
};
