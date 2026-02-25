import { Button } from '@/components/button/button';
import { loginApi } from '@/service/login';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginInput } from './inputs/login-input';
import { PasswordInput } from './inputs/password-input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

export const LoginForm = (): ReactElement => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [serverError, setServerError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    login: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

  const isFormInvalid = Object.values(formState).some(Boolean) || !loginValue || !passwordValue;

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    setIsSubmitted(true);

    if (isFormInvalid) {
      return;
    }

    await loginUser(loginValue, passwordValue, setServerError);
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <LoginInput
          value={loginValue}
          setValue={setLoginValue}
          setServerError={setServerError}
          setFormState={setFormState}
        />

        <PasswordInput
          value={passwordValue}
          setValue={setPasswordValue}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          setServerError={setServerError}
          setFormState={setFormState}
        />

        <Button type="submit" size="large" disabled={isFormInvalid}>
          Login
        </Button>

        <p className={cx('error')}>{isSubmitted ? serverError : ''}</p>
      </form>

      <AuthToggle />
    </div>
  );
};

const AuthToggle = (): ReactElement => {
  const location = useLocation();

  const isLoginPage = location.pathname === `/${ROUTES.login}`;

  return (
    <div className={cx('form-link')}>
      <span>{isLoginPage ? 'No account?' : 'Already have an account?'} </span>

      <Link to={isLoginPage ? `/${ROUTES.register}` : `/${ROUTES.login}`}>
        {isLoginPage ? 'Register' : 'Login'}
      </Link>
    </div>
  );
};

const loginUser = async (
  login: string,
  password: string,
  setServerError: (value: string) => void,
): Promise<void> => {
  const result = await loginApi({ login, password });

  setServerError(result.error ?? '');
};
