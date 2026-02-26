import classNames from 'classnames/bind';
import type { ReactNode } from 'react';

import styles from './layout.module.css';

const cx = classNames.bind(styles);

import { Logo } from '@/components/logo/logo';

type LayoutProps = {
  children: ReactNode;
  verticalAlign?: 'top' | 'center';
};

export const Layout = ({ children, verticalAlign = 'top' }: LayoutProps) => {
  return (
    <div className={cx('layout', verticalAlign)}>
      <header>
        <Logo />
      </header>
      <main>{children}</main>
    </div>
  );
};
