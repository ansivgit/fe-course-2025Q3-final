import classNames from 'classnames/bind';
import type { ChangeEvent } from 'react';

import type { SelectOption } from '@/types/chat';

import styles from './select.module.css';

const cx = classNames.bind(styles);

type SelectProps = {
  options: SelectOption[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
};

export const Select = ({ options, value, onChange, disabled = false, className }: SelectProps) => {
  return (
    <select
      className={cx('select', className)}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
