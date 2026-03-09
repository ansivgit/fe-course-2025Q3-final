import type { OptionStatus } from '@/constants/constants';

import type { QuizWidget } from '@/types/widgets';

export const isCorrectQuizAnswer = (option: { name: string }, widget: QuizWidget): boolean =>
  widget.payload.correctAnswersIds.includes(option.name);

export const getOptionStatus = (
  option: { name: string },
  selectedIds: string[],
  isSubmitted: boolean,
  widget: QuizWidget,
): OptionStatus => {
  if (!isSubmitted) {
    return selectedIds.includes(option.name) ? 'selected' : 'none';
  }
  if (selectedIds.includes(option.name)) {
    return isCorrectQuizAnswer(option, widget) ? 'correct' : 'wrong';
  }

  if (isCorrectQuizAnswer(option, widget)) {
    return 'missed';
  }

  return 'none';
};
