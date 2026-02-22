import type { LoginErrors } from '@/types/user';

export const loginRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

export const validateLogin = (value: string): string => {
  if (!value) {
    return 'Email is required';
  }
  if (!loginRegex.test(value)) {
    return 'Invalid email format';
  }
  return '';
};

export const validatePassword = (value: string): string => {
  if (!value) {
    return 'Password is required';
  }
  if (!passwordRegex.test(value)) {
    return 'At least 8 characters, contain a number and have no spaces';
  }
  return '';
};

export const validate = (errors: LoginErrors): boolean => {
  return Object.values(errors).every((error) => error === '');
};
