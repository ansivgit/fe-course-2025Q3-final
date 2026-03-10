import classNames from 'classnames/bind';
import type { ChangeEvent } from 'react';

import styles from './text-input.module.css';

const cx = classNames.bind(styles);

type TextInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export const TextInput = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  className,
}: TextInputProps) => {
  return (
    <input
      className={cx('text-input', className)}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
