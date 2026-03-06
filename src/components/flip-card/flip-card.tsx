import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { ANIMATION_DURATION } from '@/constants/constants';

import styles from './flip-card.module.css';

const cx = classNames.bind(styles);

type FlipCardProps = {
  id: number;
  content: string;
  isFlipped: boolean;
  onClick: (id: number) => void;
  onClose: (id: number) => void;
  className?: string;
};

export const FlipCard = ({ id, content, isFlipped, onClick, onClose }: FlipCardProps) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isFlipped) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      onClose(id);
    }, ANIMATION_DURATION);

    return (): void => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isFlipped, id, onClose]);

  return (
    <button
      type="button"
      className={cx('flip-card', { flipped: isFlipped })}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className={cx('content-wrapper')}>
        <div className={cx('mask')}>
          <span>?</span>
        </div>

        <div className={cx('content')}>
          <span className={cx('card-text')}>{content}</span>
        </div>
      </div>
    </button>
  );
};
