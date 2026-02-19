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

export const isValid = (errors: LoginErrors | undefined): boolean => {
  if (!errors) {
    return false;
  }
  return errors.login === '' && errors.password === '';
};
