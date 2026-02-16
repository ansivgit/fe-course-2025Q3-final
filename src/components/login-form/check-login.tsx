import type { User } from '@/types';

import { mockUsers } from './../../../data/user';

type LoginCredentials = {
  email: string;
  password: string;
};

const USER_MESSAGES = {
  emptyFields: 'Please enter email and password',
  incorrectPassword: 'Incorrect password',
};

export const checkLogin = ({ email, password }: LoginCredentials): string => {
  if (!email || !password) {
    return USER_MESSAGES.emptyFields;
  }

  const user = mockUsers.find((user: User) => user.login === email);

  if (!user) {
    console.warn('User not found, redirecting to registration');
    return '';
  }

  if (user.password !== password) {
    return USER_MESSAGES.incorrectPassword;
  }

  console.warn('Login successful, redirecting to Dashboard');
  return '';
};
