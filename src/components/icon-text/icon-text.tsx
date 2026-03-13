import classNames from 'classnames/bind';
import type { ComponentType, SVGProps } from 'react';

import styles from './icon-text.module.css';

const cx = classNames.bind(styles);

type IconTextProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

export const IconText = ({ icon: Icon, text }: IconTextProps) => (
  <div className={cx('icon-text')}>
    <div className={cx('icon')}>
      <Icon />
    </div>
    <span>{text}</span>
  </div>
);
