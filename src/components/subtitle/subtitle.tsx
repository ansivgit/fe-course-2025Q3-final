import styles from '@/components/subtitle/subtitle.module.css';

import classNames from 'classnames/bind';
import type { ElementType, ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

export const SUBTITLE_LEVEL_2 = 2;
export const SUBTITLE_LEVEL_3 = 3;

type SubtitleLevel = typeof SUBTITLE_LEVEL_2 | typeof SUBTITLE_LEVEL_3;

type SubtitleProps = {
  children: ReactNode;
  className?: string;
  level?: SubtitleLevel;
};

export const Subtitle = ({
  children,
  className,
  level = SUBTITLE_LEVEL_3,
}: SubtitleProps): ReactElement => {
  const Tag: ElementType = `h${level}`;

  return <Tag className={cx('subtitle', className)}>{children}</Tag>;
};
