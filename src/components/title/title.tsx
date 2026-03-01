import classNames from 'classnames/bind';
import type { ReactNode } from 'react';

import styles from './title.module.css';

const cx = classNames.bind(styles);

type TitleSize = 'small' | 'medium' | 'large';

type TitleProps = {
  children: ReactNode;
  className?: string;
  size?: TitleSize;
};

export const Title = ({ children, className, size = 'medium' }: TitleProps) => {
  return <h1 className={cx('title', size, className)}>{children}</h1>;
};
