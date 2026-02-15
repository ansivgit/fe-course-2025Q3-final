import styles from '@/components/subtitle/subtitle.module.css';

import classNames from 'classnames/bind';
import type { ElementType, ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

type SubtitleProps = {
  children: ReactNode;
  className?: string;
  level?: 'h2' | 'h3';
};

export const Subtitle = ({ children, className, level = 'h3' }: SubtitleProps): ReactElement => {
  const Tag: ElementType = level;

  return <Tag className={cx('subtitle', className)}>{children}</Tag>;
};
