import { create } from 'zustand';

import type { User } from '@/types/user';

type UserStore = Pick<User, 'name' | 'login' | 'createdAt'> & {
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  name: '',
  login: '',
  createdAt: '',

  setUser: (user): void => {
    set(() => {
      const { name, login, createdAt } = user;

      return {
        name,
        login,
        createdAt,
      };
    });
  },
}));
