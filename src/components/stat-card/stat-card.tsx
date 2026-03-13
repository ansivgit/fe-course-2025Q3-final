import classNames from 'classnames/bind';
import type { ComponentType, SVGProps } from 'react';

import styles from './stat-card.module.css';

const cx = classNames.bind(styles);

type StatCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  number: number;
  text: string;
  change?: number;
};
export const StatCard = ({ icon: Icon, number, text, change }: StatCardProps) => {
  return (
    <div className={cx('stat-card')}>
      <div className={cx('content')}>
        <Icon className={cx('icon')} />
        <div className={cx('number')}>{number}</div>
        <div className={cx('text')}>{text}</div>
      </div>
      {change !== undefined && (
        <div className={cx('change', { positive: change >= 0, negative: change < 0 })}>
          {change >= 0 ? `+${change}` : change}
        </div>
      )}
    </div>
  );
};
