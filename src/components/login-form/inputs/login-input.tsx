import { LoginIcon } from '@/assets/icons';
import { validateLogin } from '@/utils/login-validation';

import { Input, type InputProps } from '../../input/input';

export const LoginInput = ({ onInputChange }: Pick<InputProps, 'onInputChange'>) => {
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
