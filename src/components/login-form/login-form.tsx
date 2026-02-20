import mailIcon from '@/assets/icons/email.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';
import { Button } from '@/components/button/button';

import classNames from 'classnames/bind';
import type { ChangeEvent, ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { Input } from '../input/input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

type LoginFormProps = {
  isRegistered?: boolean;
};

type AuthToggleProps = {
  isRegistered: boolean;
};

export const LoginForm = ({ isRegistered = true }: LoginFormProps): ReactElement => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

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
          placeholder="Enter your email"
          value={login}
          onChange={handleLoginChange}
          leftIcon={<img src={mailIcon} alt="" />}
        />

        <Input
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          leftIcon={<img src={passwordIcon} alt="" />}
          rightIcon={
            <button type="button" onClick={toggleShowPassword}>
              <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
            </button>
          }
        />

        <Button size="large">Login</Button>
      </form>
      <AuthToggle isRegistered={isRegistered} />
    </div>
  );
};

export const AuthToggle = ({ isRegistered }: AuthToggleProps): ReactElement => {
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
