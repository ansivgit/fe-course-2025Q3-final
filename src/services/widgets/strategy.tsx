import { QuizWidget } from '@/components/quiz-widget/quiz-widget';

import type {
  Answer,
  ValidationResult,
  Widget,
  WidgetAnswerMap,
  WidgetStrategy,
} from '@/types/widgets';

import { createRoot } from 'react-dom/client';

export const quizStrategy: WidgetStrategy<Widget, Answer> = {
  type: 'quiz',

  run: (widget: Widget & { type: 'quiz' }, onAnswer, parentContainer?: HTMLDivElement) => {
    const container = document.createElement('div');
    container.id = `widget-${widget.id}`;

    if (parentContainer) {
      parentContainer.append(container);
    } else {
      document.body.append(container);
    }

    const root = createRoot(container);

    const handleAnswer = (answer: WidgetAnswerMap['quiz']): void => {
      onAnswer(answer);
      root.unmount();
      container.remove();
    };

    root.render(<QuizWidget widget={widget} onAnswer={handleAnswer} />);
    return container;
  },

  validate: (widget, answer) => {
    const correctAnswersIds = widget.payload.correctAnswersIds;
    const selectedIds = answer.selectedIds;

    const allAnswersIds = new Set([...selectedIds, ...correctAnswersIds]);
    const result: ValidationResult = {};

    allAnswersIds.forEach((id) => {
      if (selectedIds.includes(id)) {
        result[id] = correctAnswersIds.includes(id) ? 'correct' : 'wrong';
      } else {
        result[id] = 'missed';
      }
    });

    const isCorrect = Object.values(result).every((state) => state === 'correct');

    return { isCorrect, result };
  },
};
