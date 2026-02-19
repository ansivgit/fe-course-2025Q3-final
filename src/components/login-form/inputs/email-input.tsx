import mailIcon from '@/assets/icons/email.svg';
import { Input } from '@/components/input/input';
import { validateLogin } from '@/utils/login-validation';

import type { ChangeEvent, ReactElement } from 'react';

type EmailInputProps = {
  value: string;
  onChange: (value: string, error?: string) => void;
};

export const EmailInput = ({ value, onChange }: EmailInputProps): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value, validateLogin(event.target.value));
  };

  const error = validateLogin(value);

  return (
    <Input
      id="login"
      label="Email"
      type="text"
      placeholder="Enter your email"
      value={value}
      onChange={handleChange}
      leftIcon={<img src={mailIcon} alt="" />}
      error={error}
    />
  );
};
