import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import styles from './match-card.module.css';

const cx = classNames.bind(styles);

type MatchCardProps = {
  id: number;
  content: string;
  isFlipped: boolean;
  onClick: (id: number) => void;
  onClose: (id: number) => void;
};

const AUTO_CLOSE_DELAY = 2000;

export const MatchCard = ({
  id,
  content,
  isFlipped,
  onClick,
  onClose,
}: MatchCardProps): ReactElement => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isFlipped) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      onClose(id);
    }, AUTO_CLOSE_DELAY);

    return (): void => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isFlipped, id, onClose]);

  return (
    <button
      type="button"
      className={cx('card', { flipped: isFlipped })}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className={cx('inner')}>
        <div className={cx('content-wrapper')}>
          <span className={cx('content')}>?</span>
        </div>

        <div className={cx('content-wrapper')}>
          <span className={cx('content')}>{content}</span>
        </div>
      </div>
    </button>
  );
};
