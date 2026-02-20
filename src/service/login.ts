import type {
  LoginCredentials,
  LoginResponse,
  RegisterCredentials,
  RegisterResponse,
} from '@/types';

import { v4 as uuidv4 } from 'uuid';
import { addUser, getUser } from './data-access';

const USER_MESSAGES = {
  emptyFields: 'Please fill all fields',
  incorrectPassword: 'Incorrect password',
  userNotFound: 'User not found',
  userExists: 'User with this email already exists',
};

export const loginApi = ({ login, password }: LoginCredentials): LoginResponse => {
  if (!login || !password) {
    return { success: false, message: USER_MESSAGES.emptyFields };
  }

  const user = getUser(login);

  if (!user) {
    return { success: false, message: USER_MESSAGES.userNotFound };
  }

  if (user.password !== password) {
    return { success: false, message: USER_MESSAGES.incorrectPassword };
  }

  const { password: _, ...userData } = user;
  return { success: true, message: '', user: userData };
};

export const registerApi = ({ name, login, password }: RegisterCredentials): RegisterResponse => {
  if (!name || !login || !password) {
    return { success: false, message: USER_MESSAGES.emptyFields };
  }

  const existingUser = getUser(login);
  if (existingUser) {
    return { success: false, message: USER_MESSAGES.userExists };
  }

  const newUser = addUser({
    id: uuidv4(),
    name,
    login,
    password,
    createdAt: new Date().toISOString(),
    session: [],
    settings: {},
  });

  const { password: _, ...userWithoutPassword } = newUser;

  return { success: true, message: '', user: userWithoutPassword };
};
