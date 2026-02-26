import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/layout';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Title } from '@/components/title/title';
import { WidgetCard } from '@/components/widget-card/widget-card';
import { WIDGET_CARDS_CONFIG } from '@/components/widget-card/widget-card.config';
import { parseWidgets, registerStrategy, runWidgets } from '@/services/widgets/engine';
import { quizStrategy } from '@/services/widgets/strategy';

import widgetsData from '../../../data/widgets/quiz.json';
import styles from './practice.module.css';

const cx = classNames.bind(styles);

export const Practice = () => {
  const startedRef = useRef(false);
  useEffect(() => {
    if (startedRef.current) {
      // TODO: Remove or change after UI implementation
      return;
    }

    startedRef.current = true;
    registerStrategy(quizStrategy);
    const widgets = parseWidgets(widgetsData);

    runWidgets(widgets).catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Widgets error:', error.message);
      } else {
        console.error('Widgets error:', error);
      }
    });
  }, []);
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
      </div>
    </Layout>
  );
};
