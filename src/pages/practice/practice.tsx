import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';
import styles from '@/pages/practice/practice.module.css';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

import WidgetIcon from '@/assets/icons/widget.svg';

export const Practice = (): ReactElement => {
  return (
    <Layout>
      <div className={cx('container')}>
        <section className={cx('title-section')}>
          <div className={cx('pre-title')}>
            <img src={WidgetIcon} alt="" className={cx('image')} />
            <span>Interactive Practice</span>
          </div>
          <Title size="large">Learning Widgets</Title>
          <p className={cx('description')}>Learn through play — a gamified approach to learning</p>
        </section>
        <section className={cx('widget-container')}></section>
      </div>
    </Layout>
  );
};
