import classNames from 'classnames/bind';
import { useState } from 'react';
import { CalendarIcon, EditIcon, LoginIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { Title } from '@/components/title/title';
import { useUserStore } from '@/store/useUserStore';
import { MS_IN_SECOND } from '@/constants/constants';

import styles from './profile.module.css';

const cx = classNames.bind(styles);

export const Profile = () => {
  const { name, login, createdAt, setUser, points } = useUserStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);

  const formattedDate = new Date(Number(createdAt) * MS_IN_SECOND).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={cx('profile-container')}>
      <div className={cx('profile-info')}>
        <div className={cx('profile-image')}>
          <span>{name[0].toUpperCase()}</span>
        </div>
        <div>
          {isEditing ? (
            <input
              type="text"
              value={editName}
              onChange={(event) => {
                setEditName(event.target.value);
              }}
              required
              minLength={1}
              className={cx('edit-input')}
            />
          ) : (
            <Title>{name}</Title>
          )}
          <div className={cx('profile-data')}>
            <div>
              <div className={cx('profile-icon')}>
                <LoginIcon />
              </div>
              <span>{login}</span>
            </div>
            <div>
              <div className={cx('profile-icon')}>
                <CalendarIcon />
              </div>
              <span>Since {formattedDate}</span>
            </div>
          </div>
          <div className={cx('button-container')}>
            <Button
              color="outline"
              size="small"
              isActive
              onClick={() => {
                if (!editName.trim()) {
                  return;
                }
                if (isEditing) {
                  setUser({
                    name: editName,
                    login,
                    createdAt,
                  });
                }
                setIsEditing(!isEditing);
              }}
            >
              <EditIcon className={cx('edit-icon')} />
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('points-container')}>
        <span className={cx('points-value')}>{points.toLocaleString()}</span>
        <span className={cx('points-text')}>points</span>
      </div>
    </div>
  );
};
