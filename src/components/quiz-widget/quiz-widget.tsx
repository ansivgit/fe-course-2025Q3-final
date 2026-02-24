import { Button } from '@/components/button/button';
import styles from '@/components/quiz-widget/quiz-widget.module.css';
import { Subtitle } from '@/components/subtitle/subtitle';

import type { Widget, WidgetAnswerMap } from '@/types/widgets';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

type QuizWidgetProps = {
  widget: Widget & { type: 'quiz' };
  onAnswer: (answer: WidgetAnswerMap['quiz']) => void;
};

export function QuizWidget({ widget, onAnswer }: QuizWidgetProps): ReactElement {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggle = (id: string): void => {
    setSelectedIds((selected) =>
      selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id],
    );
  };

  const letters = 'ABCDEF';

  return (
    <div>
      <div className={cx('quiz-widget')}>
        <Subtitle level="h2">{widget.payload.question}</Subtitle>
        <ul className={cx('options')}>
          {widget.payload.options.map((option, index) => {
            const isSelected = selectedIds.includes(option.value);
            return (
              <li
                key={option.value}
                className={cx('option', { optionSelected: isSelected })}
                onClick={() => {
                  toggle(option.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    toggle(option.value);
                  }
                }}
              >
                <div className={cx('option-content')}>
                  <span className={cx('letter')}>{letters[index]}</span>
                  <span className={cx('text')}>{option.value}</span>
                </div>
                {isSelected && <span className={cx('checkmark')}>✓</span>}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={cx('button-container')}>
        <Button
          disabled={selectedIds.length === 0}
          onClick={() => {
            onAnswer({ selectedIds });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
