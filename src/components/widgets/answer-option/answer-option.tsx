import { CheckCircleIcon, ErrorCircleIcon } from '@/assets/icons';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './answer-option.module.css';

const cx = classNames.bind(styles);

type AnswerOptionProps = {
  option: { name: string; value: string };
  label: string;
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
  label,
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
        <span className={cx('letter')}>{label}</span>
        <span className={cx('text')}>{option.value}</span>
      </div>
      {Icon && <span className={cx('icon', { [status]: true })}>{Icon}</span>}
    </li>
  );
}
