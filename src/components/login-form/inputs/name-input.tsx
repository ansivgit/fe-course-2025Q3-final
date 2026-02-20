import userIcon from '@/assets/icons/user.svg';
import { Input } from '@/components/input/input';
import { validateName } from '@/utils/login-validation';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

type NameInputProps = {
  value: string;
  onChange: (value: string, error?: string) => void;
  onBlur: (error?: string) => void;
};

export const NameInput = ({ value, onChange, onBlur }: NameInputProps): ReactElement => {
  const [error, setError] = useState<string>();

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
