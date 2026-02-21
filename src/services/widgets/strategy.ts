import type { QuizAnswer, QuizWidget, WidgetStrategy } from '@/types/widgets';

export const quizStrategy: WidgetStrategy<QuizWidget, QuizAnswer> = {
  type: 'quiz',

  run: (widget, _onAnswer) => {
    setTimeout(() => {
      console.log('Question:', widget.payload.question);
      console.log('Options:');

      widget.payload.options.forEach((opt) => {
        console.log(`${opt.id} - ${opt.option}`);
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
    const selected = answer.selectedIds;

    const isCorrect =
      selected.length === correctAnswersIds.length &&
      selected.every((id) => correctAnswersIds.includes(id));

    console.log('Selected:', answer.selectedIds);
    console.log(isCorrect ? '✅ Correct!' : '❌ Wrong!');
    console.log('Explanation:', widget.payload.explanation);
    console.log('---');

    return isCorrect;
  },
};
