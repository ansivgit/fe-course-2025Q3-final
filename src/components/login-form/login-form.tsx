import loginIcon from '@/assets/icons/email.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';
import { Button } from '@/components/button/button';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { ErrorMessage } from '../error/error';
import { Input } from '../input/input';
import styles from './login-form.module.css';
import { useLoginForm } from './use-login-form';

const cx = classNames.bind(styles);

type AuthToggleProps = {
  isRegistered: boolean;
  onToggle: () => void;
};

export const LoginForm = (): ReactElement => {
  const [isRegistered, setIsRegistered] = useState(true);

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
