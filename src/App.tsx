// import styles from './App.module.css';
import styles from '@/App.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { mockUsers } from './../data/user';

const cx = classNames.bind(styles);

export function App(): ReactElement {
  return (
    <div>
      <h2 className={cx('title')}>Users</h2>
      <ul>
        {mockUsers.map((user) => (
          <li key={user.id}>
            <h3>{user.userName}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
