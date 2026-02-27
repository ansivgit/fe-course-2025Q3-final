import { QuizIcon } from '@/assets/icons';
import { quizStrategy } from '@/services/widgets/strategy';

import type { Widget, WidgetAnswerMap, WidgetStrategy, WidgetType } from '@/types/widgets';

import quizData from '../../../data/widgets/quiz.json';

export type WidgetPageConfig = {
  type: WidgetType;
  title: string;
  Icon?: React.ElementType;
  completionText: string;
  widgetsData: unknown;
  strategies: WidgetStrategy<Widget, WidgetAnswerMap[Widget['type']]>[];
};

export const widgetPageConfig: WidgetPageConfig[] = [
  {
    type: 'quiz',
    title: 'JavaScript Quiz',
    Icon: QuizIcon,
    completionText: 'Congratulations! You have completed the quiz!',
    widgetsData: quizData,
    strategies: [quizStrategy],
  },
];
