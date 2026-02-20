import userIcon from '@/assets/icons/user.svg';
import { Input } from '@/components/input/input';
import { validateName } from '@/utils/login-validation';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

type NameInputProps = {
  value: string;
  onChange: (value: string, error?: string) => void;
  onBlur: (error?: string) => void;
  clearError?: boolean;
};

export const NameInput = ({
  value,
  onChange,
  onBlur,
  clearError,
}: NameInputProps): ReactElement => {
  const [error, setError] = useState<string>();

  if (clearError && error) {
    setError('');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setError('');
    onChange(event.target.value, validateName(event.target.value));
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    const validationResult = validateName(event.target.value);
    onBlur(validationResult);
    setError(validationResult);
  };

  return (
    <Input
      name="name"
      label="Name"
      placeholder="Enter your name"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      leftIcon={<img src={userIcon} alt="" />}
      error={error}
    />
  );
};
