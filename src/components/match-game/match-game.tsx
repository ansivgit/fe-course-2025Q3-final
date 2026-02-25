import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { MatchBoard } from '../match-board/match-board';
import styles from './match-game.module.css';

const cx = classNames.bind(styles);

export const MatchGame = (): ReactElement => {
  return (
    <Layout>
      <div className={cx('container')}>
        <section className={cx('title-section')}>
          <Title size="large">Match Game</Title>
        </section>

        <div className={cx('game-container')}>
          <MatchBoard />
        </div>
      </div>
    </Layout>
  );
};
