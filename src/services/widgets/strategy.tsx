import { Quiz } from '@/components/widgets/quiz-widget/quiz-widget';

import type { Answer, ValidationResult, Widget, WidgetStrategy } from '@/types/widgets';

import { createRoot } from 'react-dom/client';

export const quizStrategy: WidgetStrategy<Widget, Answer> = {
  type: 'quiz',

  run: (widget: Widget & { type: 'quiz' }, onAnswer, container?: HTMLDivElement) => {
    if (!container) {
      return;
    }

    const root = createRoot(container);

    const handleNext = (): void => {
      root.unmount();
    };

    root.render(<Quiz widget={widget} onAnswer={onAnswer} onNext={handleNext} />);
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
