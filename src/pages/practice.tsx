import { CodeIcon, MatchGameIcon, QuizIcon } from '@/assets/icons';
import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';
import { WidgetCard } from '@/components/widget-card/widget-card';

import type { ReactElement } from 'react';

export const Practice = (): ReactElement => {
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
        color="hsla(from var(--color-purple-500) h s l / var(--opacity-15))"
      />

      <WidgetCard
        name="match-game"
        image={MatchGameIcon}
        heading="Memory Game"
        subheading="Find and match all pairs of concept cards"
        tasks="20 Pairs"
        time="5 min"
        color="hsla(from var(--color-teal-500) h s l / var(--opacity-15))"
      />

      <WidgetCard
        name="code-order"
        image={CodeIcon}
        heading="Code Ordering"
        subheading="Arrange lines of code in the correct order"
        tasks="50 tasks"
        time="3 min"
        color="hsla(from var(--color-pink-500) h s l / var(--opacity-15))"
      />
    </Layout>
  );
};
