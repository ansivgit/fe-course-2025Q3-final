import classNames from 'classnames/bind';

import styles from './progress-bar.module.css';

const cx = classNames.bind(styles);

type ProgressBarProps = {
  leftText: string;
  rightText: string;
  widthPercent: number;
};

export const ProgressBar = ({ leftText, rightText, widthPercent }: ProgressBarProps) => {
  return (
    <div className={cx('progress-bar')}>
      <div className={cx('info')}>
        <div className={cx('round')}>{leftText}</div>
        <div className={cx('percentage')}>{rightText}</div>
      </div>
      <div className={cx('progress-track')}>
        <div className={cx('progress')} style={{ width: `${widthPercent}%` }} />
      </div>
    </div>
  );
};
