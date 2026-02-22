import type { LoginErrors } from '@/types';

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export const validateLogin = (value: string): string => {
  if (!value) {
    return 'Email is required';
  }
  if (!emailRegex.test(value)) {
    return 'Invalid email format';
  }
  return '';
};

export const validatePassword = (value: string): string => {
  if (!value) {
    return 'Password is required';
  }
  if (!passwordRegex.test(value)) {
    return 'At least 8 characters and contain a number';
  }
  return '';
};

export const isValid = (errors: LoginErrors): boolean => {
  return Object.values(errors).every((error) => error === '');
};
