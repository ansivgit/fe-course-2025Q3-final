import classNames from 'classnames/bind';
import { useState } from 'react';
import { Button } from '@/components/button/button';
import { FlipCard } from '@/components/flip-card/flip-card';
import { ANIMATION_DURATION } from '@/constants/constants';

import type { MatchCardState, MatchWidgetProps } from '@/types/widgets';

import styles from './match-widget.module.css';

const cx = classNames.bind(styles);

import { arrayShuffle } from '@/utils/array-shuffle';

export const MatchWidget = ({ widget, onCardStateChange, onNext }: MatchWidgetProps) => {
  const [openCards, setOpenCards] = useState<MatchCardState['cardId'][]>([]);
  const [solvedCards, setSolvedCards] = useState<MatchCardState['cardId'][]>([]);

  const [cards] = useState(() => arrayShuffle(widget.payload));

  const handleCardClick = (id: number) => {
    const activeCards = openCards.filter((id) => !solvedCards.includes(id));
    if (activeCards.length >= 2 || solvedCards.includes(id) || activeCards.includes(id)) {
      return;
    }

    const nextCards = [...openCards, id];
    setOpenCards(nextCards);
    onCardStateChange({ cardId: id, state: 'opened' });

    if (activeCards.length === 1) {
      const first = activeCards[0];
      const second = id;
      const firstCard = cards.find((card) => card.id === first);
      const secondCard = cards.find((card) => card.id === second);

      if (!firstCard || !secondCard) {
        return;
      }

      if (firstCard.value === secondCard.value) {
        setSolvedCards((previous) => [...previous, first, second]);
        onCardStateChange({ cardId: first, state: 'solved' });
        onCardStateChange({ cardId: second, state: 'solved' });
        setOpenCards([]);
      } else {
        setTimeout(() => {
          setOpenCards((previous) => previous.filter((card) => card !== first && card !== second));
        }, ANIMATION_DURATION);
      }
    }
  };

  const allCardsSolved = solvedCards.length === cards.length && cards.length > 0;

  return (
    <div>
      <div className={cx('game-board')}>
        {cards.map((card) => {
          const { id, content } = card;
          const isFlipped = openCards.includes(id);
          const isSolved = solvedCards.includes(id);
          return (
            <FlipCard
              key={id}
              id={id}
              content={content}
              isFlipped={isFlipped}
              isSolved={isSolved}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <div className={cx('button-container')}>
        <Button disabled={!allCardsSolved} onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
};
