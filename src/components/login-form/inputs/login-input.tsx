import { LoginIcon } from '@/assets/icons';
import { Input } from '@/components/input/input';
import { validateLogin } from '@/utils/login-validation';

import type { FormState } from '@/types/user';

import type { Dispatch, ReactElement, SetStateAction } from 'react';

type LoginProps = {
  value: string;
  setValue: (value: string) => void;
  setServerError: (value: string) => void;
  setFormState: Dispatch<SetStateAction<FormState>>;
};

export const LoginInput = ({
  value,
  setValue,
  setServerError,
  setFormState,
}: LoginProps): ReactElement => {
  return (
    <Input
      name="login"
      value={value}
      label="Email"
      placeholder="Enter your email"
      onInputChange={(value) => {
        setServerError('');
        setValue(value);
      }}
      setFormState={setFormState}
      validation={validateLogin}
      leftIcon={<LoginIcon />}
      errorMessage="Invalid email"
    />
  );
};
