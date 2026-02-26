import { Button } from '@/components/button/button';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Subtitle } from '@/components/subtitle/subtitle';
import { AnswerOption } from '@/components/widgets/answer-option/answer-option';
import { getOptionStatus } from '@/components/widgets/helpers';
import styles from '@/components/widgets/quiz-widget/quiz-widget.module.css';

import type { QuizPayload, WidgetProps } from '@/types/widgets';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

export function QuizWidget({ widget, onAnswer, onNext }: WidgetProps): ReactElement {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggle = (id: string): void => {
    if (isSubmitted) {
      return;
    }
    setSelectedIds((selected) =>
      selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id],
    );
  };

  const handleSubmit = (): void => {
    if (selectedIds.length === 0) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleNext = (): void => {
    onAnswer({ selectedIds });
    if (onNext) {
      onNext();
    }
  };

  return (
    <div>
      <div className={cx('quiz-widget')}>
        <Subtitle level="h2">{widget.payload.question}</Subtitle>
        <ul className={cx('options')}>
          {widget.payload.options.map((option, index) => {
            const status = getOptionStatus(option, selectedIds, isSubmitted, widget);
            return (
              <AnswerOption
                key={option.name}
                option={option}
                index={index}
                status={status}
                isSubmitted={isSubmitted}
                onToggle={() => {
                  toggle(option.name);
                }}
              />
            );
          })}
        </ul>
        {isSubmitted && Explanation(widget.payload.explanation)}
      </div>
      <div className={cx('button-container')}>
        <Button
          disabled={selectedIds.length === 0 && !isSubmitted}
          onClick={isSubmitted ? handleNext : handleSubmit}
        >
          {isSubmitted ? 'Next' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}

function Explanation(explanation: QuizPayload['explanation']): ReactElement | undefined {
  if (!explanation) {
    return;
  }
  return (
    <div className={cx('explanation')}>
      <h4>Explanation</h4>
      <Paragraph text={explanation} />
    </div>
  );
}
