import classNames from 'classnames/bind';
import type { ComponentType, SVGProps } from 'react';

import { Paragraph } from '../paragraph/paragraph';
import styles from './stat-card.module.css';

const cx = classNames.bind(styles);

type StatCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  number: number;
  text: string;
  change?: number;
  color?: StatCardColor;
};

type StatCardColor = 'purple' | 'teal' | 'pink';

export const StatCard = ({ icon: Icon, number, text, change, color = 'purple' }: StatCardProps) => {
  return (
    <div className={cx('stat-card')}>
      <div className={cx('icon-container')}>
        <Icon className={cx('icon', color)} />
      </div>
      <div className={cx('number')}>{number}</div>
      <div className={cx('content')}>
        <Paragraph text={text}></Paragraph>
        {change !== undefined && (
          <div className={cx('change', { positive: change >= 0, negative: change < 0 })}>
            {change >= 0 ? `+${change}` : change}
          </div>
        )}
      </div>
    </div>
  );
};
