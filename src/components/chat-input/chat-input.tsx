import classNames from 'classnames/bind';
import { type ChangeEvent, type SyntheticEvent, useState } from 'react';
import { SendIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button/icon-button';
import { TextInput } from '@/components/text-input/text-input';

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
      <TextInput
        className={cx('input')}
        value={value}
        onChange={handleChange}
        placeholder="Введите ваш ответ..."
        disabled={disabled}
      />
      <IconButton
        type="submit"
        disabled={disabled || !value.trim()}
        ariaLabel="Отправить сообщение"
        className={cx('send-button')}
      >
        <SendIcon className={cx('send-icon')} />
      </IconButton>
    </form>
  );
};
