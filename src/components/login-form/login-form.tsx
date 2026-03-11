import classNames from 'classnames/bind';
import { type SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@/components/button/button';
import { login, register } from '@/services/api/auth';
import { useUserStore } from '@/store/useUserStore';
import { ERROR_CODE_KEYS, ROUTES } from '@/constants/constants';

import type { HttpResponse } from '@/types/responses';
import type { AuthFormFields, User } from '@/types/user';

import { LoginInput } from './inputs/login-input';
import { PasswordInput } from './inputs/password-input';
import { UserNameInput } from './inputs/user-name-input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

export const LoginForm = ({ page = 'login' }: { page?: string }) => {
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState('');
  const [userNameValue, setUserNameValue] = useState('Anonymous');
  const [passwordValue, setPasswordValue] = useState('');
  const [isFormValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({ login: false, userName: false, password: false });
  const [formErrorMessage, setFormErrorMessage] = useState('');

  const { setUser } = useUserStore();

  const isRegisterPage = page === 'register';

  const checkFormValidity = (): boolean => {
    if (formErrorMessage) {
      return false;
    }

    return Object.values(errors).every((error) => !error) && !!loginValue && !!passwordValue;
  };

  useEffect(() => {
    checkFormValidity();
  }, [loginValue, passwordValue, formErrorMessage]);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (isFormValid) {
      const result: HttpResponse<User> = isRegisterPage
        ? await register({ login: loginValue, name: userNameValue, password: passwordValue })
        : await login({ login: loginValue, password: passwordValue });

      if (result.data) {
        setUser(result.data);
        void navigate(`/${ROUTES.practice}`);
      }

      if (result.error) {
        setFormErrorMessage(result.error.message);
        setFormValid(false);

        if (result.error.errorCode === ERROR_CODE_KEYS.USER_NOT_FOUND) {
          void navigate(`/${ROUTES.register}`);
        } else {
          console.error('Unexpected login result:', result);
        }
      }
    }
  };

  const createFieldHandler = (
    fieldName: keyof AuthFormFields,
    setValue: (value: string) => void,
  ) => {
    return (value: string, isValid: boolean): void => {
      setFormErrorMessage('');

      setValue(value);
      setErrors((previous) => ({
        ...previous,
        [fieldName]: !isValid,
      }));

      setFormValid(checkFormValidity());
    };
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <LoginInput onInputChange={createFieldHandler('login', setLoginValue)} />
        {isRegisterPage && (
          <UserNameInput onInputChange={createFieldHandler('name', setUserNameValue)} />
        )}
        <PasswordInput onInputChange={createFieldHandler('password', setPasswordValue)} />

        <Button type="submit" size="large" disabled={!isFormValid}>
          Login
        </Button>

        <p className={cx('error')}>{formErrorMessage}</p>
      </form>
    </div>
  );
};
