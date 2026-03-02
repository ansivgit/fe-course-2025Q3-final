import classNames from 'classnames/bind';
import { type SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/button/button';
import { login } from '@/services/api/auth';
import { ROUTES } from '@/constants/constants';

import { LoginInput } from './inputs/login-input';
import { PasswordInput } from './inputs/password-input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isFormValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({ login: false, password: false });
  const [formErrorMessage, setFormErrorMessage] = useState('');

  const checkFormValidity = useCallback((): boolean => {
    if (formErrorMessage) {
      return false;
    }

    return Object.values(errors).every((error) => !error) && !!loginValue && !!passwordValue;
  }, [errors, formErrorMessage, loginValue, passwordValue]);

  useEffect(() => {
    //! TODO: fix lint error
    checkFormValidity();
  }, [loginValue, passwordValue, formErrorMessage, checkFormValidity]);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (isFormValid) {
      const result = await login({ login: loginValue, password: passwordValue });

      if (result.error) {
        setFormErrorMessage(result.error.message);
        setFormValid(false);
      }
    }
  };

  const handleLoginChange = (value: string, isValid: boolean): void => {
    setFormErrorMessage('');

    setLoginValue(value);
    setErrors((previous) => ({
      ...previous,
      login: !isValid,
    }));

    setFormValid(checkFormValidity());
  };

  const handlePasswordChange = (value: string, isValid: boolean): void => {
    setFormErrorMessage('');

    setPasswordValue(value);
    setErrors((previous) => ({
      ...previous,
      password: !isValid,
    }));

    setFormValid(checkFormValidity());
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <LoginInput onInputChange={handleLoginChange} />
        <PasswordInput onInputChange={handlePasswordChange} />

        <Button type="submit" size="large" disabled={!isFormValid}>
          Login
        </Button>

        <p className={cx('error')}>{formErrorMessage}</p>
      </form>

      <AuthToggle />
    </div>
  );
};

const AuthToggle = () => {
  const location = useLocation();

  const isRegisterPage = location.pathname === `/${ROUTES.register}`;

  return (
    <div className={cx('form-link')}>
      <span>{isRegisterPage ? 'Already have an account?' : 'No account?'} </span>

      <Link to={isRegisterPage ? `/${ROUTES.login}` : `/${ROUTES.register}`}>
        {isRegisterPage ? 'Login' : 'Register'}
      </Link>
    </div>
  );
};
