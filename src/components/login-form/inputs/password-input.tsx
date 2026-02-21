import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';
import { Input } from '@/components/input/input';
import type { InputProps } from '@/types';
import { validatePassword } from '@/utils/login-validation';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

export const PasswordInput = ({
  value,
  onChange,
  onBlur,
  clearError,
}: InputProps): ReactElement => {
  const [error, setError] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);

  if (clearError && error) {
    setError('');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setError('');
    onChange(event.target.value, validatePassword(event.target.value));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    const validationResult = validatePassword(event.target.value);
    onBlur(validationResult);
    setError(validationResult);
  };

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

  return (
    <Input
      name="password"
      label="Password"
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter your password"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
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
