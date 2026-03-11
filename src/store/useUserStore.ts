import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from '@/types/user';

type UserStore = Pick<User, 'name' | 'login' | 'createdAt'> & {
  setUser: (user: Pick<User, 'name' | 'login' | 'createdAt'>) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'user-storage',
    },
  ),
);
