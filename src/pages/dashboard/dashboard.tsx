import classNames from 'classnames/bind';
import { Layout } from '@/components/layout/layout';
import { Profile } from '@/components/profile/profile';

import styles from './dashboard.module.css';

const cx = classNames.bind(styles);

export const Dashboard = () => {
  return (
    <Layout>
      <div className={cx('container')}>
        <Profile></Profile>
      </div>
    </Layout>
  );
};
