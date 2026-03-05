import classNames from 'classnames/bind';
import { useState } from 'react';

import { MatchCard } from '../match-card/match-card';
import { MATCH_CARDS_CONFIG } from '../match-card/match-card.config';
import styles from './match-board.module.css';

const cx = classNames.bind(styles);

export const MatchBoard = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const handleCardClick = (id: number): void => {
    if (openCards.length >= 2 || openCards.includes(id)) {
      return;
    }

    setOpenCards((previous) => [...previous, id]);
  };

  const handleCardClose = (id: number): void => {
    setOpenCards((previous) => previous.filter((cardId) => cardId !== id));
  };

  return (
    <div className={cx('grid')}>
      {MATCH_CARDS_CONFIG.map((card) => (
        <MatchCard
          key={card.id}
          id={card.id}
          content={card.content}
          isFlipped={openCards.includes(card.id)}
          onClick={handleCardClick}
          onClose={handleCardClose}
        />
      ))}
    </div>
  );
};
