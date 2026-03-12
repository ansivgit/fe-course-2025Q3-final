import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from '@/types/user';

type UserStore = Pick<User, 'name' | 'login' | 'createdAt'> & {
  points: number;
  setUser: (user: Pick<User, 'name' | 'login' | 'createdAt'> & { points?: number }) => void;
  setName: (name: string) => void;
  changePoints: (amount: number) => void;
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
          const { name, login, createdAt, points } = user;

          return {
            name,
            login,
            createdAt,
            points: points ?? 0,
          };
        });
      },

      setName: (name: string): void => {
        set({ name });
      },

      changePoints: (amount: number): void => {
        set((state) => ({ points: state.points + amount }));
      },
    }),
    {
      name: 'user-storage',
    },
  ),
);
