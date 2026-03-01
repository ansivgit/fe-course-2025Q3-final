import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { CheckCircleIcon, ErrorCircleIcon } from '@/assets/icons';
import type { OptionStatus } from '@/constants/constants';

import styles from './answer-option.module.css';

const cx = classNames.bind(styles);

type AnswerOptionProps = {
  option: { id: string; name: string; value: string };
  label: string;
  status: OptionStatus;
  onOptionClick: () => void;
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
  onOptionClick,
}: AnswerOptionProps) {
  const Icon: ReactElement | null = status === 'none' ? null : statusIcon[status];

  return (
    <li className={cx('option', { [status]: true })} onClick={onOptionClick}>
      <div className={cx('option-content')}>
        <span className={cx('letter')}>{label}</span>
        <span className={cx('text')}>{option.value}</span>
      </div>
      {Icon && <span className={cx('icon', { [status]: true })}>{Icon}</span>}
    </li>
  );
}
