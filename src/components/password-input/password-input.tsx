import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';
import { Input } from '../input/input';

type PasswordInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  id?: string;
};

export const PasswordInput = ({
  value,
  onChange,
  placeholder = 'Enter password',
  label = 'Password',
  id = 'password',
}: PasswordInputProps): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

  return (
    <Input
      id={id}
      label={label}
      type={showPassword ? 'text' : 'password'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      leftIcon={<img src={passwordIcon} alt="Password icon" />}
      rightIcon={
        <button type="button" onClick={toggleShowPassword}>
          <img
            src={showPassword ? eyeOffIcon : eyeIcon}
            alt={showPassword ? 'Hide password' : 'Show password'}
          />
        </button>
      }
    />
  );
};
