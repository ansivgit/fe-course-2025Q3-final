import classNames from 'classnames/bind';
import { useState } from 'react';
import { CalendarIcon, EditIcon, LoginIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { IconText } from '@/components/icon-text/icon-text';
import { Title } from '@/components/title/title';
import { useUserStore } from '@/store/useUserStore';
import { formatTimestampToMonthYear } from '@/utils/format-data';
import { validateUserName } from '@/utils/login-validation';

import styles from './profile.module.css';

const cx = classNames.bind(styles);

export const Profile = () => {
  const { name, login, createdAt, setName, points } = useUserStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [nameError, setNameError] = useState('');

  const date = formatTimestampToMonthYear(createdAt);

  return (
    <div className={cx('profile-container')}>
      <div className={cx('profile-info')}>
        <div className={cx('profile-image')}>
          <span>{name[0].toUpperCase()}</span>
        </div>
        <div className={cx('user-info')}>
          <div className={cx('profile-title')}>
            <NameField
              isEditing={isEditing}
              editName={editName}
              setEditName={setEditName}
              name={name}
              nameError={nameError}
              setNameError={setNameError}
            />
          </div>
          <div className={cx('profile-data')}>
            <IconText icon={LoginIcon} text={login} />
            <IconText icon={CalendarIcon} text={`Since ${date}`} />
          </div>
          <div className={cx('button-container')}>
            <Button
              color="outline"
              size="small"
              isActive
              onClick={() => {
                const trimmedName = editName.trim();
                if (!trimmedName) {
                  setNameError('Name cannot be empty');
                  return;
                }
                if (!validateUserName(trimmedName)) {
                  setNameError('Use only latin letters and numbers');
                  return;
                }
                if (isEditing) {
                  setName(trimmedName);
                }
                setIsEditing(!isEditing);
              }}
            >
              <IconText icon={EditIcon} text={isEditing ? 'Save' : 'Edit'} />
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('points-container')}>
        <div className={cx('points-value')}>{points.toLocaleString()}</div>
        <div className={cx('points-text')}>points</div>
      </div>
    </div>
  );
};

const NameField = ({
  isEditing,
  editName,
  setEditName,
  name,
  nameError,
  setNameError,
}: {
  isEditing: boolean;
  editName: string;
  setEditName: (v: string) => void;
  name: string;
  nameError: string;
  setNameError: (v: string) => void;
}) => {
  return isEditing ? (
    <>
      <input
        type="text"
        value={editName}
        onChange={(event) => {
          setEditName(event.target.value);
          setNameError('');
        }}
        className={cx('edit-input')}
      />
      {nameError && <span className={cx('error-text')}>{nameError}</span>}
    </>
  ) : (
    <Title>{name}</Title>
  );
};
