import classNames from 'classnames/bind';
import type { ComponentType, SVGProps } from 'react';

import styles from './icon-item.module.css';

const cx = classNames.bind(styles);

type IconItemProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

export const IconItem = ({ icon: Icon, text }: IconItemProps) => (
  <div className={cx('icon-item')}>
    <div className={cx('icon')}>
      <Icon />
    </div>
    <span>{text}</span>
  </div>
);
