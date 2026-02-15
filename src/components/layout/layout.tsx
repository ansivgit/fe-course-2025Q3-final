import styles from '@/components/layout/layout.module.css';

import classNames from 'classnames/bind';
import type { ReactElement, ReactNode } from 'react';

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
  verticalAlign?: 'top' | 'center';
};

export const Layout = ({ children, verticalAlign = 'top' }: LayoutProps): ReactElement => {
  return <div className={cx('layout', verticalAlign)}>{children}</div>;
};
