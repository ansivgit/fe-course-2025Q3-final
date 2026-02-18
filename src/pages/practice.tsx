import CodeIcon from '@/assets/icons/code.svg';
import MatchGameIcon from '@/assets/icons/match-game.svg';
import QuizIcon from '@/assets/icons/quiz.svg';
import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';
import { Widget } from '@/components/widget-card/widget-card';

import type { ReactElement } from 'react';

export const Practice = (): ReactElement => {
  return (
    <Layout>
      <Title>Practice</Title>
      <Widget
        className="quiz"
        image={QuizIcon}
        heading="Quiz"
        subheading="Test your knowledge with multiple questions"
        text1="150 questions"
        text2="2 min"
      />

      <Widget
        className="match-game"
        image={MatchGameIcon}
        heading="Memory Game"
        subheading="Find and match all pairs of concept cards"
        text1="20 Pairs"
        text2="5 min"
      />

      <Widget
        className="code-order"
        image={CodeIcon}
        heading="Code Ordering"
        subheading="Arrange lines of code in the correct order"
        text1="50 tasks"
        text2="3 min"
      />
    </Layout>
  );
};
