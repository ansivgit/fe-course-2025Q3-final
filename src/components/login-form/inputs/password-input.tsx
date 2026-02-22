import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import Icon from '@/assets/icons/password.svg';
import { Input } from '@/components/input/input';
import { validatePassword } from '@/utils/login-validation';

import type { CredentialsInputProps } from '@/types/user';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

export const PasswordInput = ({ onStateChange }: CredentialsInputProps): ReactElement => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setErrorMessage('');
    const value = event.target.value;
    setValue(value);
    onStateChange(false, validatePassword(value));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    const validationResult = validatePassword(event.target.value);
    onStateChange(true, validationResult);
    setErrorMessage(validationResult);
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
      leftIcon={<img src={Icon} alt="" />}
      rightIcon={
        <button type="button" onClick={toggleShowPassword}>
          <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
        </button>
      }
      errorMessage={errorMessage}
    />
  );
};
