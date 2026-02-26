import { EyeIcon, EyeOffIcon, LoginIcon, PasswordIcon } from '@/assets/icons';
import { Button } from '@/components/button/button';
import { loginApi } from '@/service/login';
import { validateLogin, validatePassword } from '@/utils/login-validation';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input } from '../input/input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

export const LoginForm = (): ReactElement => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({ login: '', password: '' });

  const [showPassword, setShowPassword] = useState(false);

  const isFormValid =
    !Object.values(errors).some((error) => error !== '') || !loginValue || !passwordValue;

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (isFormValid) {
      setIsSubmitted(true);
      const result = await loginApi({ login: loginValue, password: passwordValue });
      setFormError(result.error ?? '');
    }
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <Input
          name="login"
          value={loginValue}
          label="Email"
          placeholder="Enter your email"
          leftIcon={<LoginIcon />}
          validation={validateLogin}
          errorMessage="Invalid email"
          onChange={(value, isValid) => {
            setFormError('');

            setErrors((previous) => ({
              ...previous,
              login: isValid ? '' : 'Invalid email',
            }));

            setLoginValue(value);
          }}
        />

        <Input
          name="password"
          value={passwordValue}
          label="Password"
          placeholder="Enter your password"
          type={showPassword ? 'text' : 'password'}
          leftIcon={<PasswordIcon />}
          rightIcon={
            <button
              type="button"
              onClick={() => {
                setShowPassword((previous) => !previous);
              }}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          }
          validation={validatePassword}
          errorMessage="At least 8 chars, 1 number"
          onChange={(value, isValid) => {
            setFormError('');

            setErrors((previous) => ({
              ...previous,
              password: isValid ? '' : 'At least 8 chars, 1 number',
            }));

            setPasswordValue(value);
          }}
        />

        <Button type="submit" size="large" disabled={!isFormValid}>
          Login
        </Button>

        <p className={cx('error')}>{isSubmitted ? formError : ''}</p>
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
