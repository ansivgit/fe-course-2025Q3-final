import classNames from 'classnames/bind';

import styles from './progress-bar.module.css';

const cx = classNames.bind(styles);

type ProgressBarProps = {
  completed: number;
  total: number;
};

export const ProgressBar = ({ completed, total }: ProgressBarProps) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className={cx('progress-bar')}>
      <div className={cx('info')}>
        <div className={cx('round')}>
          Round {completed} of {total}
        </div>
        <div className={cx('percentage')}>{percentage}%</div>
      </div>
      <div className={cx('progress-track')}>
        <div className={cx('progress')} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
