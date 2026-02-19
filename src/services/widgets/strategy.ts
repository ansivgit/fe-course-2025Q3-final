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

      const correctIds = widget.payload.correctIds.map((id) => `'${id}'`);

      console.log(
        `➡ To answer, call: answerWidget('${widget.id}', { selectedIds: [${correctIds.join(
          ', ',
        )}] })`,
      );
    }, 0);
  },

  validate: (widget, answer) => {
    const correctIds = widget.payload.correctIds;
    const selected = answer.selectedIds;

    const isCorrect =
      selected.length === correctIds.length && selected.every((id) => correctIds.includes(id));

    console.log('Selected:', answer.selectedIds);
    console.log(isCorrect ? '✅ Correct!' : '❌ Wrong!');
    console.log('Explanation:', widget.payload.explanation);
    console.log('---');

    return isCorrect;
  },
};
