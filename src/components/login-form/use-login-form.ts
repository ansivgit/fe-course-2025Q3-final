import { loginApi } from '@/service/login';
import { validateLogin, validatePassword } from '@/utils/login-validation';

import type { LoginErrors } from '@/types/user';

import type { SyntheticEvent } from 'react';
import { useState } from 'react';

type UseLoginFormReturn = {
  errorMessage: string;
  errors: LoginErrors;
  isValid: {
    login: boolean;
    password: boolean;
  };
  showPassword: boolean;
  toggleShowPassword: () => void;
  handleLoginChange: (isBlur: boolean, value: string) => void;
  handlePasswordChange: (isBlur: boolean, value: string) => void;
  handleSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
};

export const useLoginForm = (): UseLoginFormReturn => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<LoginErrors>({
    loginError: '',
    passwordError: '',
  });

  const [isValid, setIsValid] = useState({
    login: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

  const handleLoginChange = (isBlur: boolean, value: string): void => {
    const loginError = validateLogin(value);

    setIsValid((previous) => ({
      ...previous,
      login: !loginError,
    }));

    if (isBlur) {
      setErrors((previous) => ({ ...previous, loginError }));
    } else {
      setErrors((previous) => ({ ...previous, loginError: '' }));
      setErrorMessage('');
    }
  };

  const handlePasswordChange = (isBlur: boolean, value: string): void => {
    const passwordError = validatePassword(value);

    setIsValid((previous) => ({
      ...previous,
      password: !passwordError,
    }));

    if (isBlur) {
      setErrors((previous) => ({ ...previous, passwordError }));
    } else {
      setErrors((previous) => ({ ...previous, passwordError: '' }));
      setErrorMessage('');
    }
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const login = getString(formData, 'login');
    const password = getString(formData, 'password');

    const { message } = loginApi({ login, password });
    setErrorMessage(message);
  };

  return {
    errorMessage,
    errors,
    isValid,
    showPassword,
    toggleShowPassword,
    handleLoginChange,
    handlePasswordChange,
    handleSubmit,
  };
};

const getString = (formData: FormData, key: string): string => {
  const value = formData.get(key);
  return typeof value === 'string' ? value : '';
};
