import type { LoginErrors } from '@/types';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export const validateLogin = (value: string): string | undefined => {
  if (!value) {
    return '';
  }
  if (!emailRegex.test(value)) {
    return 'Invalid email format';
  }
  return '';
};

export const validatePassword = (value: string): string | undefined => {
  if (!value) {
    return undefined;
  }
  if (!passwordRegex.test(value)) {
    return 'At least 8 characters and contain a number';
  }
  return '';
};

export const validateName = (value: string): string | undefined => {
  if (!value) {
    return '';
  }

  if (value.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }

  return '';
};

export const isValid = (errors: LoginErrors | undefined, isRegistered: boolean): boolean => {
  if (!errors) {
    return false;
  }

  if (isRegistered) {
    return errors.name === '' && errors.login === '' && errors.password === '';
  }

  return errors.login === '' && errors.password === '';
};
