import classNames from 'classnames/bind';
import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';

import { MatchWidget } from '../widgets/match-widget/match-widget';
import styles from './match-game.module.css';

const cx = classNames.bind(styles);

/* TODO: Move to widget page config after strategy implementation */

export const MatchGame = () => {
  return (
    <Layout>
      <div className={cx('container')}>
        <section className={cx('title-section')}>
          <Title size="large">Match Game</Title>
        </section>

        <div className={cx('game-container')}>
          <MatchWidget />
        </div>
      </div>
    </Layout>
  );
};
