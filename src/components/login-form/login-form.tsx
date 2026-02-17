import mailIcon from '@/assets/icons/email.svg';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { checkLogin } from './check-login';
import styles from './login-form.module.css';
import { PasswordInput } from './password-input/password-input';

const cx = classNames.bind(styles);

type LoginFormProps = {
  isRegistered: boolean;
};

export const LoginForm = ({ isRegistered }: LoginFormProps): ReactElement => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const message = checkLogin({ email: login, password });
    setErrorMessage(message);
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

        {errorMessage && <div className={cx('form-error')}>{errorMessage}</div>}

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
