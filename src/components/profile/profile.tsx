import classNames from 'classnames/bind';
import { CalendarIcon, EditIcon, MailIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { Title } from '@/components/title/title';

import styles from './profile.module.css';

const cx = classNames.bind(styles);

export const Profile = () => {
  return (
    <div className={cx('profile-container')}>
      <div className={cx('profile-info')}>
        <div className={cx('profile-image')}>
          <span>D</span>
        </div>
        <div>
          <Title>Developer Pro</Title>
          <div className={cx('profile-data')}>
            <div>
              <div className={cx('profile-icon')}>
                <MailIcon />
              </div>
              <span>dev@example.com</span>
            </div>
            <div>
              <div className={cx('profile-icon')}>
                <CalendarIcon />
              </div>
              <span>Since January 2025</span>
            </div>
          </div>
          <div className={cx('button-container')}>
            <Button color="outline" size="small" isActive>
              <EditIcon className={cx('edit-icon')} />
              Edit
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('points-container')}>
        <span className={cx('points-value')}>4,250</span>
        <span className={cx('points-text')}>points</span>
      </div>
    </div>
  );
};
