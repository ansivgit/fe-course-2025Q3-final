import { EyeIcon, EyeOffIcon, PasswordIcon } from '@/assets/icons';
import { Input } from '@/components/input/input';
import { validatePassword } from '@/utils/login-validation';

import type { FormState } from '@/types/user';

import type { Dispatch, ReactElement, SetStateAction } from 'react';

type PasswordProps = {
  value: string;
  setValue: (value: string) => void;
  showPassword: boolean;
  toggleShowPassword: () => void;
  setServerError: (value: string) => void;
  setFormState: Dispatch<SetStateAction<FormState>>;
};

export const PasswordInput = ({
  value,
  setValue,
  showPassword,
  toggleShowPassword,
  setServerError,
  setFormState,
}: PasswordProps): ReactElement => {
  return (
    <Input
      name="password"
      value={value}
      label="Password"
      placeholder="Enter your password"
      type={showPassword ? 'text' : 'password'}
      onInputChange={(value) => {
        setValue(value);
        setServerError('');
      }}
      setFormState={setFormState}
      validation={validatePassword}
      leftIcon={<PasswordIcon />}
      rightIcon={
        <button type="button" onClick={toggleShowPassword}>
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      }
    />
  );
};
