import type { User } from '@/types';

import { mockUsers } from './../../../data/user';

type LoginCredentials = {
  email: string;
  password: string;
};

export const checkLogin = ({ email, password }: LoginCredentials): void => {
  if (!email || !password) {
    console.warn('Please enter email and password');
    return;
  }

  const user = mockUsers.find((user: User) => user.login === email);

  if (!user) {
    console.warn('User not found, redirecting to registration');
    return;
  }

  if (user.password !== password) {
    console.warn('Incorrect password');
    return;
  }

  console.warn('Login successful, redirecting to Dashboard');
};
