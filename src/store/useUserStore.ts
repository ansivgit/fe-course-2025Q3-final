import { create } from 'zustand';

import type { Session, User } from '@/types/user';

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  addSession: (session: Session) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  setUser: (user): void => {
    set({ user });
  },

  addSession: (session): void => {
    set((state) => {
      if (!state.user) {
        return state;
      }

      return {
        user: {
          ...state.user,
          session: [...state.user.session, session],
        },
      };
    });
  },
}));
