import loginIcon from '@/assets/icons/email.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';

import type { LoginErrors } from '@/types/user';

import type { ReactElement } from 'react';
import { Input } from '../input/input';

type LoginFieldsProps = {
  isRegistered: boolean;
  errors: LoginErrors;
  showPassword: boolean;
  toggleShowPassword: () => void;
  handleNameChange: (isBlur: boolean, value: string) => void;
  handleLoginChange: (isBlur: boolean, value: string) => void;
  handlePasswordChange: (isBlur: boolean, value: string) => void;
};

export const LoginFields = ({
  isRegistered,
  errors,
  showPassword,
  toggleShowPassword,
  handleNameChange,
  handleLoginChange,
  handlePasswordChange,
}: LoginFieldsProps): ReactElement => (
  <>
    {!isRegistered && (
      <Input
        name="name"
        label="Name"
        placeholder="Enter your name"
        onChange={handleNameChange}
        errorMessage={errors.nameError}
      />
    )}

    <Input
      name="login"
      label="Email"
      placeholder="Enter your email"
      onChange={handleLoginChange}
      errorMessage={errors.loginError}
      leftIcon={<img src={loginIcon} alt="" />}
    />

    <Input
      name="password"
      label="Password"
      placeholder="Enter your password"
      type={showPassword ? 'text' : 'password'}
      onChange={handlePasswordChange}
      errorMessage={errors.passwordError}
      leftIcon={<img src={passwordIcon} alt="" />}
      rightIcon={
        <button type="button" onClick={toggleShowPassword}>
          <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
        </button>
      }
    />
  </>
);
