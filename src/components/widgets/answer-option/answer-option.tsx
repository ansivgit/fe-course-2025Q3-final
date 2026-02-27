import { CheckCircleIcon, ErrorCircleIcon } from '@/assets/icons';
import styles from '@/components/widgets/answer-option/answer-option.module.css';
import { LETTERS } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

type AnswerOptionProps = {
  option: { name: string; value: string };
  index: number;
  status: 'correct' | 'wrong' | 'missed' | 'selected' | 'none';
  isSubmitted: boolean;
  onToggle: () => void;
};

const statusIcon: Record<AnswerOptionProps['status'], ReactElement | null> = {
  none: null,
  selected: <CheckCircleIcon />,
  correct: <CheckCircleIcon />,
  missed: <CheckCircleIcon />,
  wrong: <ErrorCircleIcon />,
};

export function AnswerOption({
  option,
  index,
  status,
  isSubmitted,
  onToggle,
}: AnswerOptionProps): ReactElement {
  let Icon: ReactElement | null = null;

  if (!isSubmitted && status === 'selected') {
    Icon = statusIcon.selected;
  } else if (isSubmitted) {
    Icon = statusIcon[status];
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: clickable list item
    <li className={cx('option', { [status]: true })} onClick={onToggle}>
      <div className={cx('option-content')}>
        <span className={cx('letter')}>{LETTERS[index]}</span>
        <span className={cx('text')}>{option.value}</span>
      </div>
      {Icon && <span className={cx('icon', { [status]: true })}>{Icon}</span>}
    </li>
  );
}
