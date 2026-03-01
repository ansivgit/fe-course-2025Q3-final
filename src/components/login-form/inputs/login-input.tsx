import { LoginIcon } from '@/assets/icons';
import { validateLogin } from '@/utils/login-validation';

import type { ReactElement } from 'react';
import type { InputProps } from '../../input/input';
import { Input } from '../../input/input';

export const LoginInput = ({ onInputChange }: Pick<InputProps, 'onInputChange'>): ReactElement => {
  return (
    <Input
      name="login"
      label="Email"
      placeholder="Enter your email"
      leftIcon={<LoginIcon />}
      validation={validateLogin}
      errorMessage="Invalid email"
      onInputChange={onInputChange}
    />
  );
};
