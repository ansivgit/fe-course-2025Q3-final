import type { User } from '@/types/user';

import { mockUsers } from './../../data/user';

export const getUser = (login: string): User | undefined => {
  return mockUsers.find((user) => user.login === login);
};
