import type { OptionStatus } from '@/constants/constants';

import type { Widget, WidgetType } from '@/types/widgets';

export const isCorrectAnswer = (
  option: { name: string },
  widget: Widget & { type: WidgetType },
): boolean => widget.payload.correctAnswersIds.includes(option.name);

export const getOptionStatus = (
  option: { name: string },
  selectedIds: string[],
  isSubmitted: boolean,
  widget: Widget & { type: 'quiz' },
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
