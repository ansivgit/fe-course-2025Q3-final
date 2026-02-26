import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import styles from './input.module.css';

const cx = classNames.bind(styles);

type InputProps = {
  name: string;
  value: string;
  label?: string;
  type?: 'text' | 'password';
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChange: (value: string, isValid: boolean) => void;
  validation: (value: string) => boolean;
  errorMessage: string;
};

export const Input = ({
  name,
  value,
  label,
  type = 'text',
  placeholder = '',
  leftIcon,
  rightIcon,
  onChange,
  validation,
  errorMessage,
}: InputProps): ReactElement => {
  const [inputError, setInputError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;

    const isValid = validation(newValue);

    setInputError('');

    onChange(newValue, isValid);
  };

  const handleBlur = (): void => {
    const isValid = validation(value);

    setInputError(isValid ? '' : errorMessage);

    onChange(value, isValid);
  };

  return (
    <>
      <label className={cx('input-label')}>
        {label && <span>{label}</span>}

        <div className={cx('input-field')}>
          {leftIcon && <span className={cx('input-icon', 'left')}>{leftIcon}</span>}

          <input
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            className={cx('input', {
              'has-left': leftIcon,
              'has-right': rightIcon,
            })}
          />

          {rightIcon && <span className={cx('input-icon', 'right')}>{rightIcon}</span>}
        </div>
      </label>

      <p className={cx('error')}>{inputError}</p>
    </>
  );
};
