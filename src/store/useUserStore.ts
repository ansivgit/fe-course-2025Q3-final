import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from '@/types/user';

type UserStore = Pick<User, 'name' | 'login' | 'createdAt'> & {
  points: number;
  setUser: (user: Pick<User, 'name' | 'login' | 'createdAt'>) => void;
  setPoints: (points: number) => void;
  addPoints: (amount: number) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      name: '',
      login: '',
      createdAt: '',
      points: 0,

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

      setPoints: (points: number): void => {
        set({ points });
      },

      addPoints: (amount): void => {
        const current = useUserStore.getState().points;
        useUserStore.getState().setPoints(current + amount);
      },
    }),
    {
      name: 'user-storage',
    },
  ),
);
