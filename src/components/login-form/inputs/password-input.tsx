import { EyeIcon, EyeOffIcon, PasswordIcon } from '@/assets/icons';
import { validatePassword } from '@/utils/login-validation';

import type { ReactElement } from 'react';
import { useState } from 'react';
import type { InputProps } from '../../input/input';
import { Input } from '../../input/input';

export const PasswordInput = ({
  onInputChange,
}: Pick<InputProps, 'onInputChange'>): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = (): void => {
    setShowPassword((previous) => !previous);
  };

  return (
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
      onInputChange={onInputChange}
    />
  );
};
