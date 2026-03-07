import type { OptionStatus } from '@/constants/constants';

import type { QuizWidget } from '@/types/widgets';

export const isCorrectAnswer = (option: { name: string }, widget: QuizWidget): boolean =>
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
    return isCorrectAnswer(option, widget) ? 'correct' : 'wrong';
  }

  if (isCorrectAnswer(option, widget)) {
    return 'missed';
  }

  return 'none';
};

export const shuffle = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let index = shuffledArray.length - 1; index > 0; index--) {
    const index_ = Math.floor(Math.random() * (index + 1));
    [shuffledArray[index], shuffledArray[index_]] = [shuffledArray[index_], shuffledArray[index]];
  }
  return shuffledArray;
};
