import { QuizIcon } from '@/assets/icons';
import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';
import styles from '@/pages/practice/quiz.module.css';
import { parseWidgets, registerStrategy, runWidgets } from '@/services/widgets/engine';
import { quizStrategy } from '@/services/widgets/strategy';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import widgetsData from '../../../data/widgets/quiz.json';

const cx = classNames.bind(styles);

export const Quiz = (): ReactElement => {
  const startedRef = useRef(false);
  const quizContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startedRef.current) {
      return;
    }
    startedRef.current = true;

    registerStrategy(quizStrategy);

    const widgets = parseWidgets(widgetsData);

    if (quizContainer.current) {
      runWidgets(widgets, quizContainer.current).catch((error: unknown) => {
        if (error instanceof Error) {
          console.error('Widgets error:', error.message);
        } else {
          console.error('Widgets error:', error);
        }
      });
    }
  }, []);

  return (
    <Layout>
      <section className={cx('title-section')}>
        <div className={cx('icon')}>
          <QuizIcon />
        </div>
        <Title size="small">JavaScript Quiz</Title>
      </section>
      <div ref={quizContainer} className={cx('quiz-container')} />
    </Layout>
  );
};
