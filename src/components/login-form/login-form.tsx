import loginIcon from '@/assets/icons/email.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';
import { Button } from '@/components/button/button';
import { loginApi } from '@/service/login';
import { validateLogin, validatePassword } from '@/utils/login-validation';

import type { LoginErrors } from '@/types/user';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { ErrorMessage } from '../error/error';
import { Input } from '../input/input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

type AuthToggleProps = {
  isRegistered: boolean;
  onToggle: () => void;
};

export const LoginForm = (): ReactElement => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<LoginErrors>({
    loginError: '',
    passwordError: '',
  });
  const [isValid, setIsValid] = useState({ login: false, password: false });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

  const handleLoginChange = (isBlur: boolean, value: string): void => {
    const loginError = validateLogin(value);
    setIsValid((previous) => ({
      ...previous,
      login: !loginError,
    }));
    if (isBlur) {
      setErrors((previous) => ({
        ...previous,
        loginError,
      }));
    } else {
      setErrors((previous) => ({
        ...previous,
        loginError: '',
      }));
      setErrorMessage('');
    }
  };

  const handlePasswordChange = (isBlur: boolean, value: string): void => {
    const passwordError = validatePassword(value);
    setIsValid((previous) => ({
      ...previous,
      password: !passwordError,
    }));
    if (isBlur) {
      setErrors((previous) => ({
        ...previous,
        passwordError,
      }));
    } else {
      setErrors((previous) => ({
        ...previous,
        passwordError: '',
      }));
      setErrorMessage('');
    }
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const login: string = event.currentTarget.login;
    const password: string = event.currentTarget.password;
    const { message } = loginApi({ login, password });
    setErrorMessage(message);
  };

  const toggleAuth = (): void => {
    setIsRegistered((previous) => !previous);
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <Input
          name="login"
          label="Email"
          onChange={handleLoginChange}
          errorMessage={errors.loginError}
          leftIcon={<img src={loginIcon} alt="" />}
        />

        <Input
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handlePasswordChange}
          errorMessage={errors.passwordError}
          leftIcon={<img src={passwordIcon} alt="" />}
          rightIcon={
            <button type="button" onClick={toggleShowPassword}>
              <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
            </button>
          }
        />

        <ErrorMessage message={errorMessage} />

        <Button type="submit" size="large" disabled={!isValid.login || !isValid.password}>
          Login
        </Button>
      </form>
      <AuthToggle isRegistered={isRegistered} onToggle={toggleAuth} />
    </div>
  );
};

export const AuthToggle = ({ isRegistered, onToggle }: AuthToggleProps): ReactElement => {
  const text = isRegistered ? 'No account?' : 'Already have an account?';

  const linkText = isRegistered ? 'Register' : 'Login';

  return (
    <div className={cx('form-link')}>
      <span>{text} </span>
      <button type="button" onClick={onToggle}>
        {linkText}
      </button>
    </div>
  );
};
