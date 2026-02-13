import styles from '@/App.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

export function App(): ReactElement {
  return (
    <div>
      <h1 className={cx('title')}>Hello, Tandem</h1>
    </div>
  );
}
