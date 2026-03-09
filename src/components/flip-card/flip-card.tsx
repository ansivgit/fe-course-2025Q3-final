import classNames from 'classnames/bind';
import { useEffect } from 'react';

import styles from './flip-card.module.css';

const cx = classNames.bind(styles);

type FlipCardProps = {
  id: number;
  content: string;
  isFlipped: boolean;
  isSolved: boolean;
  onClick: (id: number) => void;
};

export const FlipCard = ({ id, content, isFlipped, isSolved, onClick }: FlipCardProps) => {
  useEffect(() => {
    if (!isFlipped || isSolved) {
      return;
    }
  }, [isFlipped, isSolved, id]);

  return (
    <button
      type="button"
      className={cx('flip-card', {
        flipped: isFlipped || isSolved,
        solved: isSolved,
      })}
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
