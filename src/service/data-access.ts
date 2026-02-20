import type { User } from '@/types';

import { mockUsers } from './../../data/user';

let users: User[] = [...mockUsers];

export const getUser = (login: string): User | undefined => {
  return users.find((user) => user.login === login);
};

export const addUser = (user: User): User => {
  users = [...users, user];
  return user;
};
