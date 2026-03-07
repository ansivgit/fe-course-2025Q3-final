import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';
import { ANIMATION_DURATION } from '@/constants/constants';

import type { MatchWidgetProps } from '@/types/widgets';

import { FlipCard } from '../../flip-card/flip-card';
import styles from './match-widget.module.css';

const cx = classNames.bind(styles);

const shuffle = <T,>(array: T[]): T[] => {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index--) {
    const index_ = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[index_]] = [copy[index_], copy[index]];
  }
  return copy;
};

export const MatchWidget = ({ widget, onCardStateChange, onNext }: MatchWidgetProps) => {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [solvedCards, setSolvedCards] = useState<number[]>([]);

  const cards = useMemo(() => shuffle(widget.payload), [widget.payload]);

  const handleCardClick = (id: number) => {
    if (openCards.length >= 2 || openCards.includes(id) || solvedCards.includes(id)) {
      return;
    }

    const nextCards = [...openCards, id];
    setOpenCards(nextCards);
    onCardStateChange({ cardId: id, state: 'opened' });

    if (nextCards.length === 2) {
      const [first, second] = nextCards;
      const firstCard = widget.payload.find((c) => c.id === first);
      const secondCard = widget.payload.find((c) => c.id === second);

      if (!firstCard || !secondCard) {
        return;
      }

      const isMatch = firstCard.value === secondCard.value;

      if (isMatch) {
        setSolvedCards((previuos) => [...previuos, first, second]);

        onCardStateChange({ cardId: first, state: 'solved' });
        onCardStateChange({ cardId: second, state: 'solved' });
      }

      setTimeout(() => {
        setOpenCards([]);
      }, ANIMATION_DURATION);
    }
  };

  const allSolved = solvedCards.length === widget.payload.length && widget.payload.length > 0;

  return (
    <div>
      <div className={cx('game-board')}>
        {cards.map((card) => {
          const { id, content } = card;
          const isFlipped = openCards.includes(card.id);
          const isSolved = solvedCards.includes(card.id);
          return (
            <FlipCard
              key={id}
              id={id}
              content={content}
              isFlipped={isFlipped}
              isSolved={isSolved}
              onClick={handleCardClick}
              onClose={() => {
                setOpenCards((previous) => {
                  return previous.filter((index) => index !== card.id);
                });
              }}
            />
          );
        })}
      </div>

      {allSolved && (
        <button type="button" className={cx('next-button')} onClick={onNext}>
          Next round
        </button>
      )}
    </div>
  );
};
