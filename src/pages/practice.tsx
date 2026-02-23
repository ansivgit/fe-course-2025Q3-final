import { CodeIcon, MatchGameIcon, QuizIcon } from '@/assets/icons';
import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';
import { WidgetCard } from '@/components/widget-card/widget-card';
import { parseWidgets, registerStrategy, runWidgets } from '@/services/widgets/engine';
import { quizStrategy } from '@/services/widgets/strategy';

import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import widgetsData from '../../data/widgets/quiz.json';

export const Practice = (): ReactElement => {
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
      <Title>Practice</Title>
      <WidgetCard
        name="quiz"
        image={QuizIcon}
        heading="Quiz"
        subheading="Test your knowledge with multiple questions"
        tasks="150 questions"
        time="2 min"
        color="purple"
      />

      <WidgetCard
        name="match-game"
        image={MatchGameIcon}
        heading="Memory Game"
        subheading="Find and match all pairs of concept cards"
        tasks="20 Pairs"
        time="5 min"
        color="teal"
      />

      <WidgetCard
        name="code-order"
        image={CodeIcon}
        heading="Code Ordering"
        subheading="Arrange lines of code in the correct order"
        tasks="50 tasks"
        time="3 min"
        color="pink"
      />
    </Layout>
  );
};
