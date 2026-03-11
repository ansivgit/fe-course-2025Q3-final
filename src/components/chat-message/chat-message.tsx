import classNames from 'classnames/bind';
import { LogoIcon, UserIcon } from '@/assets/icons';

import type { ChatMessage as ChatMessageType } from '@/types/chat';

import styles from './chat-message.module.css';

const cx = classNames.bind(styles);

type ChatMessageProps = {
  message: ChatMessageType;
};

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const { role, text, timestamp } = message;
  const isAi = role === 'ai';

  return (
    <article className={cx('message', role)}>
      <div className={cx('avatar')}>
        {isAi ? (
          <LogoIcon className={cx('avatar-icon')} />
        ) : (
          <UserIcon className={cx('avatar-icon')} />
        )}
      </div>
      <div className={cx('content')}>
        <p className={cx('text')}>{text}</p>
        <time className={cx('timestamp')}>{timestamp}</time>
      </div>
    </article>
  );
};
