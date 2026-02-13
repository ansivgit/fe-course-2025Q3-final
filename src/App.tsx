// import styles from './App.module.css';
import '@/styles/index.css';
import styles from '@/App.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

import { Button } from '@/components/button/button';

const cx = classNames.bind(styles);

export function App(): ReactElement {
  return (
    <div>
      <h1 className={cx('title')}>Hello, Tandem</h1>
      <Button color='gradient' size='medium'>Gradient</Button>
    </div>
  );
}