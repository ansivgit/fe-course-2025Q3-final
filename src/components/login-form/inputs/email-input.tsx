import mailIcon from '@/assets/icons/email.svg';
import { Input } from '@/components/input/input';
import type { InputProps } from '@/types';
import { validateLogin } from '@/utils/login-validation';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

export const EmailInput = ({ value, onChange, onBlur }: InputProps): ReactElement => {
  const [error, setError] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setError('');
    onChange(event.target.value, validateLogin(event.target.value));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    const validationResult = validateLogin(event.target.value);
    onBlur(validationResult);
    setError(validationResult);
  };

  return (
    <Input
      name="login"
      label="Email"
      placeholder="Enter your email"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      leftIcon={<img src={mailIcon} alt="" />}
      error={error}
    />
  );
};
