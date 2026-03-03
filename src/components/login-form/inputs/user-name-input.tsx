import { UserIcon } from '@/assets/icons';
import { validateUserName } from '@/utils/login-validation';

import { Input, type InputProps } from '../../input/input';

export const UserNameInput = ({ onInputChange }: Pick<InputProps, 'onInputChange'>) => {
  return (
    <Input
      name="userName"
      label="Name"
      placeholder="Enter your Name or Nickname (optional)"
      leftIcon={<UserIcon />}
      validation={validateUserName}
      errorMessage="Invalid format: use only latin letters and numbers"
      onInputChange={onInputChange}
    />
  );
};
