import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';
import { Button } from '@/components/button/button';
import { ANIMATION_DURATION } from '@/constants/constants';

import type { MatchWidgetProps } from '@/types/widgets';

import { FlipCard } from '../../flip-card/flip-card';
import styles from './match-widget.module.css';

const cx = classNames.bind(styles);

import { shuffle } from '../helpers';

export const MatchWidget = ({ widget, onCardStateChange, onNext }: MatchWidgetProps) => {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [solvedCards, setSolvedCards] = useState<number[]>([]);

  const cards = useMemo(() => shuffle(widget.payload), [widget.payload]);

  const handleCardClick = (id: number) => {
    if (
      (openCards.length >= 2 && !openCards.every((cardId) => solvedCards.includes(cardId))) ||
      openCards.includes(id) ||
      solvedCards.includes(id)
    ) {
      return;
    }

    const nextCards = [...openCards, id];
    setOpenCards(nextCards);
    onCardStateChange({ cardId: id, state: 'opened' });

    if (nextCards.length === 2) {
      const [first, second] = nextCards;
      const firstCard = widget.payload.find((card) => card.id === first);
      const secondCard = widget.payload.find((card) => card.id === second);

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

  const allCardsSolved = solvedCards.length === widget.payload.length && widget.payload.length > 0;

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
      <div className={cx('button-container')}>
        <Button disabled={!allCardsSolved} onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
};
