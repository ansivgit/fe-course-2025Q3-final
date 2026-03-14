import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { ArrowIcon } from '@/assets/icons';
import { Layout } from '@/components/layout/layout';
import { Paragraph } from '@/components/paragraph/paragraph';
import { StatCard } from '@/components/stat-card/stat-card';
import { Title } from '@/components/title/title';
import { WidgetCard } from '@/components/widget-card/widget-card';
import { WIDGET_CARDS_CONFIG } from '@/pages/practice/widget-cards.config';

import styles from './practice.module.css';

const cx = classNames.bind(styles);

export const Practice = (): ReactElement => {
  return (
    <Layout>
      <div className={cx('container')}>
        <section className={cx('title-section')}>
          <Title size="large">Learning Widgets</Title>
          <Paragraph text="Learn through play — a gamified approach to learning"></Paragraph>
        </section>
        <div className={cx('widget-container')}>
          {WIDGET_CARDS_CONFIG.map((widget) => (
            <WidgetCard key={widget.name} widget={widget} />
          ))}
        </div>
        <StatCard icon={ArrowIcon} number={24} text="Sessions" change={5} />
      </div>
    </Layout>
  );
};
