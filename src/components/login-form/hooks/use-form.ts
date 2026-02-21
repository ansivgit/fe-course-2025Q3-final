import { loginApi, registerApi } from '@/service/login';
import type { LoginErrors } from '@/types';
import { ROUTES } from '@/constants/constants';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

type UseLoginFormReturn = {
  isRegistered: boolean;
  name: string;
  login: string;
  password: string;
  errors?: LoginErrors;
  errorMessage: string;
  clearInputsError: boolean;

  handleNameChange: (value: string, error?: string) => void;
  handleLoginChange: (value: string, error?: string) => void;
  handlePasswordChange: (value: string, error?: string) => void;

  handleNameBlur: (error?: string) => void;
  handleLoginBlur: (error?: string) => void;
  handlePasswordBlur: (error?: string) => void;

  toggleAuth: () => void;
  submitForm: (navigate: (path: string) => void) => void;
};

export const useLoginForm = (): UseLoginFormReturn => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<LoginErrors>();
  const [clearInputsError, setClearInputsError] = useState(false);

  const handlers = createHandlers({
    setName,
    setLogin,
    setPassword,
    setErrors,
    setErrorMessage,
  });

  const submitForm = (navigate: (path: string) => void): void => {
    const response = isRegistered
      ? loginApi({ login, password })
      : registerApi({ name, login, password });

    console.warn(response.success, response.user);

    if (response.success) {
      navigate(`/${ROUTES.practice}`);
      return;
    }

    setErrorMessage(response.message);
  };

  const toggleAuth = (): void => {
    setIsRegistered((previous) => !previous);
    setErrors({});
    setErrorMessage('');
    setName('');
    setLogin('');
    setPassword('');
    setClearInputsError(true);
  };

  useEffect(() => {
    if (clearInputsError) {
      setClearInputsError(false);
    }
  }, [clearInputsError]);

  return {
    isRegistered,
    name,
    login,
    password,
    errors,
    errorMessage,
    clearInputsError,
    ...handlers,
    toggleAuth,
    submitForm,
  };
};

type HandlersParams = {
  setName: Dispatch<SetStateAction<string>>;
  setLogin: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setErrors: Dispatch<SetStateAction<LoginErrors | undefined>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

type LoginFormHandlers = {
  handleNameChange: (value: string, error?: string) => void;
  handleLoginChange: (value: string, error?: string) => void;
  handlePasswordChange: (value: string, error?: string) => void;

  handleNameBlur: (error?: string) => void;
  handleLoginBlur: (error?: string) => void;
  handlePasswordBlur: (error?: string) => void;
};

const createHandlers = ({
  setName,
  setLogin,
  setPassword,
  setErrors,
  setErrorMessage,
}: HandlersParams): LoginFormHandlers => {
  const handleNameChange = (value: string, error?: string): void => {
    setName(value);
    setErrors((previous) => ({ ...previous, name: error }));
  };

  const handleLoginChange = (value: string, error?: string): void => {
    setErrorMessage('');
    setLogin(value);
    setErrors((previous) => ({ ...previous, login: error }));
  };

  const handlePasswordChange = (value: string, error?: string): void => {
    setErrorMessage('');
    setPassword(value);
    setErrors((previous) => ({ ...previous, password: error }));
  };

  const handleNameBlur = (error?: string): void => {
    setErrors((previous) => ({ ...previous, name: error }));
  };

  const handleLoginBlur = (error?: string): void => {
    setErrors((previous) => ({ ...previous, login: error }));
  };

  const handlePasswordBlur = (error?: string): void => {
    setErrors((previous) => ({ ...previous, password: error }));
  };

  return {
    handleNameChange,
    handleLoginChange,
    handlePasswordChange,
    handleNameBlur,
    handleLoginBlur,
    handlePasswordBlur,
  };
};
