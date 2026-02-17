import mailIcon from '@/assets/icons/email.svg';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { loginApi } from '@/service/login';
import type { LoginResponse } from '@/types';

import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { AuthFooter } from '../auth-footer/auth-footer';
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
  const [_, setUserData] = useState<LoginResponse['user'] | null>(null);

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
    const response = loginApi({ login, password });
    if (response.success) {
      setErrorMessage('');
      setUserData(response.user);
      console.warn('Logged in user data:', response.user);
    } else {
      setErrorMessage(response.message);
      setUserData(null);
    }
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
      <AuthFooter isRegistered={isRegistered} />
    </div>
  );
};
