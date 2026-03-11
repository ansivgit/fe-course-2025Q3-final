import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatHeader } from '@/components/chat-header/chat-header';
import { ChatInput } from '@/components/chat-input/chat-input';
import { ChatMessage } from '@/components/chat-message/chat-message';
import { Layout } from '@/components/layout/layout';
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = (text: string): void => {
    const newMessage: ChatMessageType = {
      id: uuidv4(),
      role: 'user',
      text,
      timestamp: formatTime(),
    };

    setMessages((previous) => [...previous, newMessage]);

    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
          <div ref={messagesEndRef} />
        </section>

        <ChatInput onSend={handleSend} />
      </div>
    </Layout>
  );
};
