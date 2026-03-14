import classNames from 'classnames/bind';
import type { ComponentType, SVGProps } from 'react';

import { Paragraph } from '../paragraph/paragraph';
import styles from './stat-card.module.css';

const cx = classNames.bind(styles);

type StatCard = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  number: string;
  text: string;
  extraText?: string;
  change?: number;
  color?: StatCardColor;
};

type StatCardColor = 'purple' | 'teal' | 'green' | 'orange';

type StatCardProps = {
  statCard: StatCard;
};

export const StatCard = ({ statCard }: StatCardProps) => {
  const { icon: Icon, number, text, extraText, change, color = 'purple' } = statCard;
  return (
    <div className={cx('stat-card', color)}>
      <div className={cx('icon-container', color)}>
        <Icon className={cx('icon', color)} />
      </div>
      <div className={cx('number-container')}>
        <div className={cx('number')}>{number}</div>
        {extraText && <span className={cx('text')}>{extraText}</span>}
      </div>
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
