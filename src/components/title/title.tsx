import styles from '@/components/title/title.module.css';

import classNames from 'classnames/bind';
import type { ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

type TitleSize = 'small' | 'medium' | 'large';

type TitleProps = {
  children: ReactNode;
  className?: string;
  size?: TitleSize;
};

export const Title = ({ children, className, size = 'medium' }: TitleProps): ReactElement => {
  return <h1 className={cx('title', size, className)}>{children}</h1>;
};
