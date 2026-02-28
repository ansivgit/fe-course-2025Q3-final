import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import styles from './input.module.css';

const cx = classNames.bind(styles);

export type InputProps = {
  name: string;
  label?: string;
  type?: 'text' | 'password';
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onInputChange: (value: string, isValid: boolean) => void;
  validation: (value: string) => boolean;
  errorMessage: string;
};

export const Input = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  leftIcon,
  rightIcon,
  onInputChange,
  validation,
  errorMessage,
}: InputProps): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputError('');

    const newValue = event.target.value;
    const isValid = validation(newValue);
    setInputValue(newValue);

    if (isValid) {
      onInputChange(newValue, isValid);
    }
  };

  const handleBlur = (): void => {
    const isValid = validation(inputValue);

    if (isValid) {
      setInputError('');
      onInputChange(inputValue, isValid);

      return;
    }

    setInputError(errorMessage);
  };

  return (
    <>
      <label className={cx('input-label')}>
        {label && <span>{label}</span>}

        <div className={cx('input-field')}>
          {leftIcon && <span className={cx('input-icon', 'left')}>{leftIcon}</span>}

          <input
            name={name}
            value={inputValue}
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
