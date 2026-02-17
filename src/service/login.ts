import type { LoginCredentials, LoginResponse } from '@/types';

import { getUser } from './data-access';

const USER_MESSAGES = {
  emptyFields: 'Please enter email and password',
  incorrectPassword: 'Incorrect password',
  userNotFound: 'User not found',
};

export const loginApi = ({ login, password }: LoginCredentials): LoginResponse => {
  if (!login || !password) {
    return { success: false, message: USER_MESSAGES.emptyFields };
  }

  const user = getUser(login);

  if (!user) {
    console.warn('User not found, redirecting to registration');
    return { success: false, message: USER_MESSAGES.userNotFound };
  }

  if (user.password !== password) {
    return { success: false, message: USER_MESSAGES.incorrectPassword };
  }

  const { password: _, ...userData } = user;
  console.warn('Login successful, redirecting to Dashboard');
  return { success: true, message: 'Login successful', user: userData };
};
