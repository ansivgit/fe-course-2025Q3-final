import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';
import { parseWidgets, registerStrategy, runWidgets } from '@/services/widgets/engine';
import { quizStrategy } from '@/services/widgets/strategy';

import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import widgetsData from '../../data/widgets/quiz.json';

export const Practice = (): ReactElement => {
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) {
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
      <Title>Practice</Title>
    </Layout>
  );
};
