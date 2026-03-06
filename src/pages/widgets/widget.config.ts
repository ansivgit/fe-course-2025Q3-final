import matchGameData from '@/../data/widgets/match-game.json';
import quizData from '@/../data/widgets/quiz.json';
import { QuizIcon } from '@/assets/icons';
import { matchStrategy, quizStrategy } from '@/services/widgets/strategy';

import type { Widget, WidgetAnswerMap, WidgetStrategy, WidgetType } from '@/types/widgets';

export type WidgetPageConfig = {
  id: string;
  type: WidgetType;
  title: string;
  Icon?: React.ElementType;
  completionText: string;
  widgetsData: unknown;
  strategies: WidgetStrategy<WidgetType, WidgetAnswerMap[Widget['type']]>[];
};

export const widgetPageConfig: WidgetPageConfig[] = [
  {
    id: 'quiz',
    type: 'quiz',
    title: 'JavaScript Quiz',
    Icon: QuizIcon,
    completionText: 'Congratulations! You have completed the quiz!',
    widgetsData: quizData,
    strategies: [quizStrategy],
  },
  {
    id: 'match-game',
    type: 'match-game',
    title: 'Memory Game',
    Icon: QuizIcon,
    completionText: 'Congratulations! You have matched them all!',
    widgetsData: matchGameData,
    strategies: [matchStrategy],
  },
];
