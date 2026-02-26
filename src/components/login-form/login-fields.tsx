import { EyeIcon, EyeOffIcon, LoginIcon, PasswordIcon } from '@/assets/icons';
import { validateLogin, validatePassword } from '@/utils/login-validation';

import type { ReactElement } from 'react';
import { Input } from '../input/input';

type Props = {
  loginValue: string;
  passwordValue: string;
  showPassword: boolean;
  onLoginChange: (value: string, isValid: boolean) => void;
  onPasswordChange: (value: string, isValid: boolean) => void;
  togglePassword: () => void;
};

export const LoginFields = ({
  loginValue,
  passwordValue,
  showPassword,
  onLoginChange,
  onPasswordChange,
  togglePassword,
}: Props): ReactElement => {
  return (
    <>
      <Input
        name="login"
        value={loginValue}
        label="Email"
        placeholder="Enter your email"
        leftIcon={<LoginIcon />}
        validation={validateLogin}
        errorMessage="Invalid email"
        onChange={onLoginChange}
      />

      <Input
        name="password"
        value={passwordValue}
        label="Password"
        placeholder="Enter your password"
        type={showPassword ? 'text' : 'password'}
        leftIcon={<PasswordIcon />}
        rightIcon={
          <button type="button" onClick={togglePassword}>
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        }
        validation={validatePassword}
        errorMessage="At least 8 chars, 1 number"
        onChange={onPasswordChange}
      />
    </>
  );
};
