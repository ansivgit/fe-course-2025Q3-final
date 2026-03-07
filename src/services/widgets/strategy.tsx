import { createRoot, type Root } from 'react-dom/client';
import { MatchWidget } from '@/components/widgets/match-widget/match-widget';
import { Quiz } from '@/components/widgets/quiz-widget/quiz-widget';

import type {
  Answer,
  MatchAnswer,
  MatchCardState,
  ValidateReturn,
  ValidationResult,
  Widget,
  WidgetStrategy,
} from '@/types/widgets';

const roots = new WeakMap<HTMLDivElement, Root>();

export const quizStrategy: WidgetStrategy<'quiz', Answer> = {
  type: 'quiz',

  run: (widget: Widget<'quiz'>, onAnswer, container?: HTMLDivElement) => {
    if (!container) {
      return;
    }

    let root = roots.get(container);
    if (!root) {
      root = createRoot(container);
      roots.set(container, root);
    }

    const handleNext = (): void => {
      root.unmount();
      roots.delete(container);
    };

    root.render(<Quiz widget={widget} onAnswer={onAnswer} onNext={handleNext} />);
    return container;
  },

  validate: (widget: Widget<'quiz'>, answer: Answer) => {
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

const matchGameRoots = new WeakMap<HTMLDivElement, Root>();

export const matchStrategy: WidgetStrategy<'match-game', MatchAnswer> = {
  type: 'match-game',

  run: (widget: Widget<'match-game'>, onAnswer, container?: HTMLDivElement) => {
    if (!container) {
      return;
    }

    let root = matchGameRoots.get(container);
    if (!root) {
      root = createRoot(container);
      matchGameRoots.set(container, root);
    }

    const boardState = new Map<number, 'closed' | 'opened' | 'solved'>();

    const handleNext = () => {
      root.unmount();
      matchGameRoots.delete(container);
    };

    const handleCardState = (cardState: MatchCardState) => {
      boardState.set(cardState.cardId, cardState.state);

      const solvedCount = [...boardState.values()].filter((card) => card === 'solved').length;
      const totalPairs = widget.payload.length / 2;

      if (solvedCount === widget.payload.length) {
        onAnswer({
          solvedPairs: totalPairs,
          totalPairs,
        });
      }
    };

    root.render(
      <MatchWidget widget={widget} onCardStateChange={handleCardState} onNext={handleNext} />,
    );

    return container;
  },

  validate: (widget: Widget<'match-game'>, answer: MatchAnswer): ValidateReturn => {
    const totalPairs = widget.payload.length / 2;
    const isComplete = answer.solvedPairs === totalPairs;

    return {
      isCorrect: isComplete,
      result: {
        solvedPairs: answer.solvedPairs,
        totalPairs,
      },
    };
  },
};
