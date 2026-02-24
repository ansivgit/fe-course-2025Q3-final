import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, ReactNode } from 'react';
import { useEffect, useState } from 'react';
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
  onInputChange: (value: string) => void;
  onErrors: (isError: boolean) => void;
  validation: (value: string) => boolean;
};

export const Input = ({
  name,
  value,
  label,
  type = 'text',
  placeholder = '',
  leftIcon,
  rightIcon,
  onInputChange,
  onErrors,
  validation,
}: InputProps): ReactElement => {
  const [inputValue, setInputValue] = useState(value);
  const [inputError, setInputError] = useState('');

  const inputValidation = (value: string): void => {
    onErrors(true);
    const isInputValid = validation(value);

    if (isInputValid) {
      onErrors(false);
      onInputChange(value);
    } else {
      setInputError('Invalid format');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputError('');
    onErrors(true);
    const newValue = event.target.value;

    setInputValue(newValue);
  };

  const handleLoginBlur = (): void => {
    if (!inputValue) {
      setInputError(''); // если поле стало пустое (написали и стерли), мы убираем сообщение об ошибке (не знаю, как ты хочешь это реализовать, если все равно должна быть ошибка - убери это)
      return;
    }
    inputValidation(inputValue);
  };

  useEffect(() => {
    if (inputError) {
      onErrors(true);
    }
  }, [inputError, onErrors]);

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
            onBlur={handleLoginBlur}
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
