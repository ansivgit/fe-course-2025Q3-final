import type { QuizValidationResult, QuizWidgetStrategy } from '@/types/widgets';

export const quizStrategy: QuizWidgetStrategy = {
  type: 'quiz',

  run: (widget, _onAnswer) => {
    setTimeout(() => {
      console.log('Question:', widget.payload.question);
      console.log('Options:');

      widget.payload.options.forEach((opt) => {
        console.log(`${opt.name} - ${opt.value}`);
      });

      const correctAnswersIds = widget.payload.correctAnswersIds.map((id) => `'${id}'`);

      console.log(
        `➡ To answer, call: answerWidget('${widget.id}', { selectedIds: [${correctAnswersIds.join(
          ', ',
        )}] })`,
      );
    }, 0);
  },

  validate: (widget, answer) => {
    const correctAnswersIds = widget.payload.correctAnswersIds;
    const selectedIds = answer.selectedIds;

    const allAnswersIds = new Set([...selectedIds, ...correctAnswersIds]);
    const result: QuizValidationResult = {};

    allAnswersIds.forEach((id) => {
      if (selectedIds.includes(id)) {
        result[id] = correctAnswersIds.includes(id) ? 'correct' : 'wrong';
      } else {
        result[id] = 'missed';
      }
    });

    const isCorrect = Object.values(result).every((state) => state === 'correct');

    console.log('Selected:', selectedIds);
    console.log('Boolean result:', isCorrect ? '✅ Correct' : '❌ Wrong');
    console.log('Validation result:', result);
    console.log('Explanation:', widget.payload.explanation);
    console.log('---');

    return { isCorrect, result };
  },
};
