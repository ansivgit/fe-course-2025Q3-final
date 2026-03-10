import classNames from 'classnames/bind';
import { Button } from '@/components/button/button';
import { Title } from '@/components/title/title';

import styles from './profile.module.css';

const cx = classNames.bind(styles);

export const Profile = () => {
  return (
    <div className={cx('profile-container')}>
      <div className={cx('profile-image')}>
        <span>D</span>
      </div>
      <div>
        <Title>Developer Pro</Title>
        <div></div>
        <Button color="outline" size="small" isActive>
          Edit
        </Button>
      </div>
      <div></div>
      <div>
        <Button>Start AI Interview</Button>
      </div>
    </div>
  );
};
