import { EyeIcon, EyeOffIcon, LoginIcon, PasswordIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input } from '../input/input';
import styles from './login-form.module.css';
import { useLoginForm } from './use-login-form';

const cx = classNames.bind(styles);

export const LoginForm = (): ReactElement => {
  const {
    errorMessage,
    errors,
    isValid,
    showPassword,
    toggleShowPassword,
    handleLoginChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <Input
          name="login"
          label="Email"
          placeholder="Enter your email"
          onChange={handleLoginChange}
          errorMessage={errors.loginError}
          leftIcon={<LoginIcon />}
        />

        <Input
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
        />

        <p className={cx('error')}>{errorMessage}</p>

        <Button type="submit" size="large" disabled={!isValid.login || !isValid.password}>
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
