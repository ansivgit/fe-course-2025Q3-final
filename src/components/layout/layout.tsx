import styles from '@/components/layout/layout.module.css';

import classNames from 'classnames/bind';
import type { ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <div className={cx('layout')}>{children}</div>;
};
