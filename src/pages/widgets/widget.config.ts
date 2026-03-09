import { MatchGameIcon, QuizIcon } from '@/assets/icons';
import { matchStrategy, quizStrategy } from '@/services/widgets/strategy';

import type { Widget, WidgetAnswerMap, WidgetStrategy, WidgetType } from '@/types/widgets';

export type WidgetPageConfig = {
  id: string;
  type: WidgetType;
  title: string;
  Icon?: React.ElementType;
  completionText: string;
  strategies: WidgetStrategy<WidgetType, WidgetAnswerMap[Widget['type']]>[];
};

export const widgetPageConfig: WidgetPageConfig[] = [
  {
    id: 'quiz',
    type: 'quiz',
    title: 'JavaScript Quiz',
    Icon: QuizIcon,
    completionText: 'Congratulations! You have completed the quiz!',
    strategies: [quizStrategy],
  },
  {
    id: 'match-game',
    type: 'match-game',
    title: 'Memory Game',
    Icon: MatchGameIcon,
    completionText: 'Congratulations! You have matched them all!',
    strategies: [matchStrategy],
  },
];
