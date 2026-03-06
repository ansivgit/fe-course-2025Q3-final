import classNames from 'classnames/bind';
import { useState } from 'react';

import { MatchCard } from '../../match-card/match-card';
import { MATCH_CARDS_CONFIG } from '../../match-card/match-card.config';
import styles from './match-widget.module.css';

const cx = classNames.bind(styles);

export const MatchWidget = () => {
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
      {MATCH_CARDS_CONFIG.map((card) => {
        const { id, content } = card;
        return (
          <MatchCard
            key={id}
            id={id}
            content={content}
            isFlipped={openCards.includes(id)}
            onClick={handleCardClick}
            onClose={handleCardClose}
          />
        );
      })}
    </div>
  );
};
