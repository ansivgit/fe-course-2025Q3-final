import classNames from 'classnames/bind';
import { MAX_PERCENTAGE } from '@/constants/constants';

import styles from './progress-bar.module.css';

const cx = classNames.bind(styles);

type ProgressBarProps = {
  completed: number;
  total: number;
};

export const ProgressBar = ({ completed, total }: ProgressBarProps) => {
  const percentage = total > 0 ? (completed / total) * MAX_PERCENTAGE : 0;

  return (
    <div className={cx('progress-bar')}>
      <div className={cx('progress-track')}>
        <div className={cx('progress')} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
