import classNames from 'classnames/bind';
import type { ElementType, ReactNode } from 'react';

import styles from './subtitle.module.css';

const cx = classNames.bind(styles);

type SubtitleProps = {
  children: ReactNode;
  className?: string;
  level?: 'h2' | 'h3';
};

export const Subtitle = ({ children, className, level = 'h3' }: SubtitleProps) => {
  const Tag: ElementType = level;

  return <Tag className={cx('subtitle', className)}>{children}</Tag>;
};
