import { Button } from '@/components/button/button';
import { loginApi } from '@/service/login';
import { isValid } from '@/utils/login-validation';

import type { LoginErrors } from '@/types/user';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { ErrorMessage } from '../error/error';
import { LoginInput } from './inputs/login-input';
import { PasswordInput } from './inputs/password-input';
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

  const handleLoginChange = (isBlur: boolean, error?: string): void => {
    if (!isBlur) {
      setErrorMessage('');
    }
    setErrors({ ...errors, loginError: error });
  };

  const handlePasswordChange = (isBlur: boolean, error?: string): void => {
    if (!isBlur) {
      setErrorMessage('');
    }
    setErrors({ ...errors, passwordError: error });
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
        <LoginInput onStateChange={handleLoginChange} />
        <PasswordInput onStateChange={handlePasswordChange} />

        <ErrorMessage message={errorMessage} />

        <Button type="submit" size="large" disabled={!isValid(errors)}>
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
