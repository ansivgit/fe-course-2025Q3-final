import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';
import { Input } from '@/components/input/input';
import { validatePassword } from '@/utils/login-validation';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

type PasswordInputProps = {
  value: string;
  onChange: (value: string, error?: string) => void;
};

export const PasswordInput = ({ value, onChange }: PasswordInputProps): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value, validatePassword(event.target.value));
  };

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

  const error = validatePassword(value);

  return (
    <Input
      id="password"
      label="Password"
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter your password"
      value={value}
      onChange={handleChange}
      leftIcon={<img src={passwordIcon} alt="" />}
      rightIcon={
        <button type="button" onClick={toggleShowPassword}>
          <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
        </button>
      }
      error={error}
    />
  );
};
