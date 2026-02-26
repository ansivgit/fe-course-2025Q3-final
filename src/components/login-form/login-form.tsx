import { Button } from '@/components/button/button';
import { loginApi } from '@/service/login';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginFields } from './login-fields';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

export const LoginForm = (): ReactElement => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [formError, setFormError] = useState('');
  const [errors, setErrors] = useState({ login: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid =
    !Object.values(errors).some((error) => error !== '') || !loginValue || !passwordValue;

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (isFormValid) {
      const result = await loginApi({ login: loginValue, password: passwordValue });
      setFormError(result.error.message);
    }
  };

  const handleLoginChange = (value: string, isValid: boolean): void => {
    setFormError('');

    setErrors((previous) => ({
      ...previous,
      login: isValid ? '' : 'Invalid email',
    }));

    setLoginValue(value);
  };

  const handlePasswordChange = (value: string, isValid: boolean): void => {
    setFormError('');

    setErrors((previous) => ({
      ...previous,
      password: isValid ? '' : 'At least 8 chars, 1 number',
    }));

    setPasswordValue(value);
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <LoginFields
          loginValue={loginValue}
          passwordValue={passwordValue}
          showPassword={showPassword}
          onLoginChange={handleLoginChange}
          onPasswordChange={handlePasswordChange}
          togglePassword={() => {
            setShowPassword((previous) => !previous);
          }}
        />

        <Button type="submit" size="large" disabled={!isFormValid}>
          Login
        </Button>

        <p className={cx('error')}>{formError}</p>
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
