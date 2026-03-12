import classNames from 'classnames/bind';
import { type ChangeEvent, type SyntheticEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SendIcon } from '@/assets/icons';
import { ChatHeader } from '@/components/chat-header/chat-header';
import { ChatMessage } from '@/components/chat-message/chat-message';
import { IconButton } from '@/components/icon-button/icon-button';
import { Layout } from '@/components/layout/layout';
import { TextInput } from '@/components/text-input/text-input';
import { formatTime } from '@/utils/format-time';

import type { ChatMessage as ChatMessageType } from '@/types/chat';

import styles from './ai-chat.module.css';
import { MOCK_MESSAGES } from './mock-messages';

const cx = classNames.bind(styles);

const handleStart = (_topic: string, _difficulty: string): void => {
  // TODO: connect to backend
};

export const AiChat = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>(MOCK_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const messagesEndReference = useRef<HTMLDivElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    const trimmed = inputValue.trim();

    if (!trimmed) {
      return;
    }

    const newMessage: ChatMessageType = {
      id: uuidv4(),
      role: 'user',
      text: trimmed,
      timestamp: formatTime(),
    };

    setMessages((previous) => [...previous, newMessage]);
    setInputValue('');

    setTimeout(() => {
      messagesEndReference.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <Layout>
      <div className={cx('chat-page')}>
        <ChatHeader onStart={handleStart} />

        <section className={cx('messages')}>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndReference} />
        </section>

        <form className={cx('chat-input')} onSubmit={handleSubmit}>
          <TextInput
            className={cx('input')}
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your answer..."
          />
          <IconButton type="submit" disabled={!inputValue.trim()} ariaLabel="Send message">
            <SendIcon className={cx('send-icon')} />
          </IconButton>
        </form>
      </div>
    </Layout>
  );
};
