import { createRoot, type Root } from 'react-dom/client';
import { MatchWidget } from '@/components/widgets/match-widget/match-widget';
import { useUserStore } from '@/store/useUserStore';
import { MATCH_GAME_POINTS } from '@/constants/constants';

import type {
  MatchCardState,
  MatchGameResult,
  ValidateReturn,
  Widget,
  WidgetStrategy,
} from '@/types/widgets';

const roots = new WeakMap<HTMLDivElement, Root>();

export const matchStrategy: WidgetStrategy<'match-game', MatchGameResult> = {
  type: 'match-game',

  run: (widget: Widget<'match-game'>, onAnswer, container?: HTMLDivElement) => {
    if (!container) {
      return;
    }

    let root = roots.get(container);
    if (!root) {
      root = createRoot(container);
      roots.set(container, root);
    }

    const boardState = new Map<number, 'closed' | 'opened' | 'solved'>();

    const handleNext = () => {
      const solvedCount = [...boardState.values()].filter((card) => card === 'solved').length;

      const totalPairs = widget.payload.length / 2;
      const solvedPairs = solvedCount / 2;

      onAnswer({
        solvedPairs,
        totalPairs,
      });

      root.unmount();
      roots.delete(container);
    };

    const handleCardState = (cardState: MatchCardState) => {
      boardState.set(cardState.cardId, cardState.state);
    };

    root.render(
      <MatchWidget widget={widget} onCardStateChange={handleCardState} onNext={handleNext} />,
    );

    return container;
  },

  validate: (widget: Widget<'match-game'>, answer: MatchGameResult): ValidateReturn => {
    const totalPairs = Math.floor(widget.payload.length / 2);
    const isComplete = answer.solvedPairs === totalPairs;

    return {
      isCorrect: isComplete,
      result: {
        solvedPairs: answer.solvedPairs,
        totalPairs,
      },
    };
  },

  onAnswerCorrect: () => {
    const store = useUserStore.getState();
    store.changePoints(MATCH_GAME_POINTS);
  },
};
