import { Button } from '@/components/button/button';
import { isValid } from '@/utils/login-validation';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from './hooks/use-form';
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
  const navigate = useNavigate();

  const {
    isRegistered,
    name,
    login,
    password,
    errors,
    errorMessage,
    clearInputsError,
    handleNameChange,
    handleLoginChange,
    handlePasswordChange,
    handleNameBlur,
    handleLoginBlur,
    handlePasswordBlur,
    toggleAuth,
    submitForm,
  } = useLoginForm();

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    submitForm(navigate);
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        {!isRegistered && (
          <NameInput
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            clearError={clearInputsError}
          />
        )}

        <EmailInput
          value={login}
          onChange={handleLoginChange}
          onBlur={handleLoginBlur}
          clearError={clearInputsError}
        />

        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          clearError={clearInputsError}
        />
        <Button size="large" disabled={!isValid(errors, !isRegistered)}>
          {isRegistered ? 'Login' : 'Register'}
        </Button>

        <div className={cx('error')}>{errorMessage || '\u00A0'}</div>
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
