import { EyeIcon, EyeOffIcon, LoginIcon, PasswordIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { validateLogin } from '@/utils/login-validation';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input } from '../input/input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

export const LoginForm = (): ReactElement => {
  const [loginValue, setLoginValue] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  const [formErrors, setFormErrors] = useState(false);

  const formValidation = (): boolean => {
    if (loginValue === '' || formErrors) { // сюда добавить проверку для пароля
      return false;
    }
    return true;
  };

  useEffect(() => {
    formValidation();
  }, [loginValue, formErrors]);

  return (
    <div>
      <form className={cx('form')}>
        <Input
          name="login"
          value={loginValue}
          label="Email"
          placeholder="Enter your email"
          onInputChange={setLoginValue}
          onErrors={setFormErrors}
          validation={validateLogin}
          leftIcon={<LoginIcon />}
        />

        {/* <Input
          name="password"
          label="Password"
          placeholder="Enter your password"
          type={showPassword ? 'text' : 'password'}
          onChange={handlePasswordChange}
          errorMessage={errors.passwordError}
          leftIcon={<PasswordIcon />}
          rightIcon={
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
        /> */}

        {/* c с учетом того, что мы показываем сообщения под инпутами, не уверена что это сообщение надо вообще */}
        {formErrors && <p className={cx('error')}>Please, check the form</p>}

        <Button type="submit" size="large" disabled={loginValue === '' || formErrors}>
          Login
        </Button>
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
