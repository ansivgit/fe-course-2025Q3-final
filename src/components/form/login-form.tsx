import mailIcon from '@/assets/icons/email.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { loginApi } from '@/service/login';
import type { LoginResponse } from '@/types';

import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

type LoginFormProps = {
  isRegistered: boolean;
};

type AuthFooterProps = {
  isRegistered: boolean;
};

export const LoginForm = ({ isRegistered }: LoginFormProps): ReactElement => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [_, setUserData] = useState<LoginResponse['user'] | null>(null);

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

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
    const { success, message, user } = loginApi({ login, password });
    setErrorMessage(success ? '' : message);
    setUserData(success ? user : null);
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

        <Input
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          leftIcon={<img src={passwordIcon} alt="Password icon" />}
          rightIcon={
            <button type="button" onClick={toggleShowPassword}>
              <img
                src={showPassword ? eyeOffIcon : eyeIcon}
                alt={showPassword ? 'Hide password' : 'Show password'}
              />
            </button>
          }
        />

        {errorMessage && <div className={cx('form-error')}>{errorMessage}</div>}

        <Button size="large">Login</Button>
      </form>
      <AuthFooter isRegistered={isRegistered} />
    </div>
  );
};

export const AuthFooter = ({ isRegistered }: AuthFooterProps): ReactElement => {
  const text = isRegistered ? 'No account?' : 'Already have an account?';

  const linkText = isRegistered ? 'Register' : 'Login';
  const linkHref = isRegistered ? '/register' : '/login';

  return (
    <div className={cx('form-footer')}>
      <span>{text} </span>
      <a href={linkHref} className={cx('link')}>
        {linkText}
      </a>
    </div>
  );
};
