import { EyeIcon, EyeOffIcon, LoginIcon, PasswordIcon } from '@/assets/icons';
import { validateLogin, validatePassword } from '@/utils/login-validation';

import type { ReactElement } from 'react';
import { useState } from 'react';
import { Input } from '../input/input';

type Props = {
  loginValue: string;
  passwordValue: string;
  onLoginChange: (value: string, isValid: boolean) => void;
  onPasswordChange: (value: string, isValid: boolean) => void;
};

export const LoginFields = ({ onLoginChange, onPasswordChange }: Props): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = (): void => {
    setShowPassword((previous) => !previous);
  };

  return (
    <>
      <Input
        name="login"
        label="Email"
        placeholder="Enter your email"
        leftIcon={<LoginIcon />}
        validation={validateLogin}
        errorMessage="Invalid email"
        onInputChange={onLoginChange}
      />

      <Input
        name="password"
        label="Password"
        placeholder="Enter your password"
        type={showPassword ? 'text' : 'password'}
        leftIcon={<PasswordIcon />}
        rightIcon={
          <button type="button" onClick={toggleVisibility}>
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        }
        validation={validatePassword}
        errorMessage="At least 8 chars, 1 number"
        onInputChange={onPasswordChange}
      />
    </>
  );
};
