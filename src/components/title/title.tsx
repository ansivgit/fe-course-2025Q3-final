import classNames from 'classnames/bind';
import styles from '@/components/title/title.module.css';
import type { ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

type TitleSize = 'small' | 'medium' | 'large';
type TitleMargin = 'default' | 'compact';
type TitleWeight = 'semibold' | 'bold';

type TitleProps = {
  children: ReactNode;
  className?: string;
  size?: TitleSize;
  margin?: TitleMargin;
  weight?: TitleWeight;
};

export const Title = ({
  children,
  className,
  size = 'medium',
  margin = 'default',
  weight = 'bold',
}: TitleProps): ReactElement => {
  return <h1 className={cx('title', size, margin, weight, className)}>{children}</h1>;
};