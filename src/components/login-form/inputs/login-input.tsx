import Icon from '@/assets/icons/email.svg';
import { Input } from '@/components/input/input';
import { validateLogin } from '@/utils/login-validation';

import type { CredentialsInputProps } from '@/types/user';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

export const LoginInput = ({ onStateChange }: CredentialsInputProps): ReactElement => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setValue(value);
    setErrorMessage('');
    onStateChange(false, validateLogin(value));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    const validationResult = validateLogin(event.target.value);
    onStateChange(true, validationResult);
    setErrorMessage(validationResult);
  };

  return (
    <Input
      name="login"
      label="Email"
      placeholder="Enter your email"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      leftIcon={<img src={Icon} alt="" />}
      errorMessage={errorMessage}
    />
  );
};
