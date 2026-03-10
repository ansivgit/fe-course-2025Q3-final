import classNames from 'classnames/bind';
import { type ChangeEvent, type SyntheticEvent, useState } from 'react';
import { SendIcon } from '@/assets/icons';

import styles from './chat-input.module.css';

const cx = classNames.bind(styles);

type ChatInputProps = {
  onSend: (text: string) => void;
  disabled?: boolean;
};

export const ChatInput = ({ onSend, disabled = false }: ChatInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    onSend(trimmed);
    setValue('');
  };

  return (
    <form className={cx('chat-input')} onSubmit={handleSubmit}>
      <input
        className={cx('input')}
        type="text"
        placeholder="Введите ваш ответ..."
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <button className={cx('send-button')} type="submit" disabled={disabled || !value.trim()}>
        <SendIcon className={cx('send-icon')} />
      </button>
    </form>
  );
};
