import { Layout } from '@/components/layout/layout';
import { Subtitle } from '@/components/subtitle/subtitle';
import { Title } from '@/components/title/title';
import styles from '@/pages/practice/practice.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

import ClockIcon from '@/assets/icons/clock.svg';
import CodeIcon from '@/assets/icons/code.svg';
import LightningIcon from '@/assets/icons/lightning.svg';
import MatchGameIcon from '@/assets/icons/match-game.svg';
import QuizIcon from '@/assets/icons/quiz.svg';
import WidgetIcon from '@/assets/icons/widget.svg';

type WidgetProps = {
  image: string;
  heading: string;
  subheading: string;
  text1: string;
  text2: string;
};

const Widget = ({ image, heading, subheading, text1, text2 }: WidgetProps): ReactElement => (
  <div className={cx('widget')}>
    <div>
      <img src={image} alt={heading} className={cx('widget-image')} />
    </div>

    <Subtitle>{heading}</Subtitle>
    <p className={cx('subheading')}>{subheading}</p>

    <div className={cx('meta')}>
      <span className={cx('meta-item')}>
        <img src={LightningIcon} alt="" className={cx('meta-image')} />
        {text1}
      </span>

      <span className={cx('meta-item')}>
        <img src={ClockIcon} alt="" className={cx('meta-image')} />
        {text2}
      </span>
    </div>
  </div>
);

export const Practice = (): ReactElement => {
  return (
    <Layout>
      <div className={cx('pre-title')}>
        <img src={WidgetIcon} alt="" className={cx('image')} />
        <span>Interactive Practice</span>
      </div>
      <Title>Learning Widgets</Title>
      <p className={cx('description')}>Learn through play — a gamified approach to learning</p>

      <section className={cx('widget-container')}>
        <Widget
          image={QuizIcon}
          heading="Quiz"
          subheading="Test your knowledge with questions and multiple-choice answers"
          text1="150 questions"
          text2="2 min"
        />

        <Widget
          image={MatchGameIcon}
          heading="Memory Game"
          subheading="Match concept cards in pairs"
          text1="20 Pairs"
          text2="5 min"
        />

        <Widget
          image={CodeIcon}
          heading="Code Ordering"
          subheading="Arrange lines of code in the correct order"
          text1="50 tasks"
          text2="3 min"
        />
      </section>
    </Layout>
  );
};
