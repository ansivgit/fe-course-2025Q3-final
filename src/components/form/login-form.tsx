import mailIcon from '@/assets/icons/email.svg';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import styles from './login-form.module.css';
import { PasswordInput } from './password-input/password-input';

const cx = classNames.bind(styles);

export const LoginForm = (isRegistered = true): ReactElement => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!login || !password) {
      console.warn('Please enter email and password');
      return;
    }

    console.warn(`Logging in with\nEmail: ${login}\nPassword: ${password}`);
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <Input
          id="login"
          label="Email"
          type="text"
          placeholder="Enter your email"
          value={login}
          onChange={handleLoginChange}
          leftIcon={<img src={mailIcon} alt="Mail" />}
        />

        <PasswordInput value={password} onChange={handlePasswordChange} />

        <Button size="large">Login</Button>
      </form>
      <div className={cx('form-footer')}>
        {isRegistered ? (
          <>
            <span>No account? </span>
            <a href="/register" className={cx('link')}>
              Register
            </a>
          </>
        ) : (
          <>
            <span>Already have an account? </span>
            <a href="/login" className={cx('link')}>
              Login
            </a>
          </>
        )}
      </div>
    </div>
  );
};
