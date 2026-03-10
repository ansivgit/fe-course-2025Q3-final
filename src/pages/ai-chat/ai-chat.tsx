import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatHeader } from '@/components/chat-header/chat-header';
import { ChatInput } from '@/components/chat-input/chat-input';
import { ChatMessage } from '@/components/chat-message/chat-message';
import { Layout } from '@/components/layout/layout';

import type { ChatMessage as ChatMessageType } from '@/types/chat';

import styles from './ai-chat.module.css';

const cx = classNames.bind(styles);

const formatTime = (): string => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const handleStart = (_topic: string, _difficulty: string): void => {
  console.log('Начало интервью с темой и уровнем сложности:', _topic, _difficulty);
};

const MOCK_MESSAGES: ChatMessageType[] = [
  {
    id: '1',
    role: 'ai',
    text:
      'Привет! Я ваш AI интервьюер. Давайте начнём ' +
      'с вопроса по JavaScript. Расскажите, что такое ' +
      'замыкание (closure) и приведите пример использования.',
    timestamp: '14:32',
  },
  {
    id: '2',
    role: 'user',
    text:
      'Замыкание — это функция, которая запоминает ' +
      'переменные из внешнего окружения, даже после того ' +
      'как внешняя функция завершила выполнение.',
    timestamp: '14:33',
  },
  {
    id: '3',
    role: 'ai',
    text:
      'Отлично! Вы правильно описали основную концепцию. ' +
      'Можете привести практический пример, где замыкания полезны?',
    timestamp: '14:33',
  },
];

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

        <div className={cx('messages')}>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </Layout>
  );
};
