import { Layout } from '@/components/layout/layout';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Title } from '@/components/title/title';
import { WidgetCard } from '@/components/widget-card/widget-card';
import { WIDGET_CARDS_CONFIG } from '@/components/widget-card/widget-card.config';
import styles from '@/pages/practice/practice.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

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
            <WidgetCard
              key={widget.name}
              name={widget.name}
              image={widget.image}
              heading={widget.heading}
              subheading={widget.subheading}
              tasks={widget.tasks}
              time={widget.time}
              color={widget.color}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
