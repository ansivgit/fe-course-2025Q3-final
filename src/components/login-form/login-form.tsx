import { Button } from '@/components/button/button';
import { loginApi, registerApi } from '@/service/login';
import type { LoginErrors } from '@/types';
import { isValid } from '@/utils/login-validation';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { EmailInput } from './inputs/email-input';
import { NameInput } from './inputs/name-input';
import { PasswordInput } from './inputs/password-input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

type AuthToggleProps = {
  isRegistered: boolean;
  onToggle: () => void;
};

export const LoginForm = (): ReactElement => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<LoginErrors>();

  const handleNameChange = (value: string, error?: string): void => {
    setName(value);
    setErrors({ ...errors, name: error });
  };

  const handleLoginChange = (value: string, error?: string): void => {
    setErrorMessage('');
    setLogin(value);
    setErrors({ ...errors, login: error });
  };

  const handlePasswordChange = (value: string, error?: string): void => {
    setErrorMessage('');
    setPassword(value);
    setErrors({ ...errors, password: error });
  };

  const handleNameBlur = (error?: string): void => {
    setErrors({ ...errors, name: error });
  };

  const handleLoginBlur = (error?: string): void => {
    setErrors({ ...errors, login: error });
  };

  const handlePasswordBlur = (error?: string): void => {
    setErrors({ ...errors, password: error });
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (isRegistered) {
      const { message } = loginApi({ login, password });
      setErrorMessage(message);
    } else {
      const { message } = registerApi({ name, login, password });
      setErrorMessage(message);
    }
  };

  const toggleAuth = (): void => {
    setIsRegistered((previous) => !previous);
    setErrors({});
    setErrorMessage('');
    setName('');
    setLogin('');
    setPassword('');
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        {!isRegistered && (
          <NameInput value={name} onChange={handleNameChange} onBlur={handleNameBlur} />
        )}
        <EmailInput value={login} onChange={handleLoginChange} onBlur={handleLoginBlur} />
        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />

        <div className={cx('error')}>{errorMessage || '\u00A0'}</div>

        <Button size="large" disabled={!isValid(errors, !isRegistered)}>
          {isRegistered ? 'Login' : 'Register'}
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
    <div className={cx('form-toggle')}>
      <span>{text} </span>
      <button type="button" className={cx('link')} onClick={onToggle}>
        {linkText}
      </button>
    </div>
  );
};
