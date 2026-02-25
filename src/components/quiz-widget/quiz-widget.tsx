import { CheckCircleIcon, ErrorCircleIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { Paragraph } from '@/components/paragraph/paragraph';
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
  onNext?: () => void;
};

const letters = 'ABCDE';

const isCorrectAnswer = (option: { name: string }, widget: Widget & { type: 'quiz' }): boolean =>
  widget.payload.correctAnswersIds.includes(option.name);

const getOptionStatus = (
  option: { name: string },
  selectedIds: string[],
  isSubmitted: boolean,
  widget: Widget & { type: 'quiz' },
): 'correct' | 'wrong' | 'missed' | 'selected' | 'none' => {
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

export function QuizWidget({ widget, onAnswer, onNext }: QuizWidgetProps): ReactElement {
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
              <QuizOption
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
        {isSubmitted && widget.payload.explanation && (
          <Explanation explanation={widget.payload.explanation} />
        )}
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

type QuizOptionProps = {
  option: { name: string; value: string };
  index: number;
  status: 'correct' | 'wrong' | 'missed' | 'selected' | 'none';
  isSubmitted: boolean;
  onToggle: () => void;
};

function QuizOption({
  option,
  index,
  status,
  isSubmitted,
  onToggle,
}: QuizOptionProps): ReactElement {
  let Icon: ReactElement | null = null;

  if (!isSubmitted && status === 'selected') {
    Icon = <CheckCircleIcon />;
  } else if (isSubmitted) {
    switch (status) {
      case 'correct':
      case 'missed': {
        Icon = <CheckCircleIcon />;
        break;
      }
      case 'wrong': {
        Icon = <ErrorCircleIcon />;
        break;
      }
    }
  }

  return (
    <li
      className={cx('option', {
        selected: status === 'selected',
        correct: status === 'correct',
        wrong: status === 'wrong',
        missed: status === 'missed',
      })}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          onToggle();
        }
      }}
    >
      <div className={cx('option-content')}>
        <span className={cx('letter')}>{letters[index]}</span>
        <span className={cx('text')}>{option.value}</span>
      </div>
      {status !== 'none' && (
        <span
          className={cx('icon', {
            correct: status === 'correct' || status === 'missed',
            wrong: status === 'wrong',
            selected: status === 'selected',
            missed: status === 'missed',
          })}
        >
          {Icon}
        </span>
      )}
    </li>
  );
}

function Explanation({ explanation }: { explanation: string }): ReactElement {
  return (
    <div className={cx('explanation')}>
      <h4>Explanation</h4>
      <Paragraph text={explanation} />
    </div>
  );
}
