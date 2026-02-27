import { CheckCircleIcon, ErrorCircleIcon } from '@/assets/icons';
import type { OptionStatus } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './answer-option.module.css';

const cx = classNames.bind(styles);

type AnswerOptionProps = {
  option: { id: string; name: string; value: string };
  label: string;
  status: OptionStatus;
  onToggle: () => void;
};

const statusIcon: Record<AnswerOptionProps['status'], ReactElement | null> = {
  none: null,
  selected: <CheckCircleIcon />,
  correct: <CheckCircleIcon />,
  missed: <CheckCircleIcon />,
  wrong: <ErrorCircleIcon />,
};

export function AnswerOption({ option, label, status, onToggle }: AnswerOptionProps): ReactElement {
  const Icon: ReactElement | null = status === 'none' ? null : statusIcon[status];

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
