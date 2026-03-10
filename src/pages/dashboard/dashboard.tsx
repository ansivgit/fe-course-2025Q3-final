import classNames from 'classnames/bind';
import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';

import styles from './dashboard.module.css';

const cx = classNames.bind(styles);

export const Dashboard = () => {
  return (
    <Layout>
      <div className={cx('container')}>
        <Title>Dashboard</Title>
      </div>
    </Layout>
  );
};
