import { create } from 'zustand';

import type { Session, User } from '@/types/user';

export type UserStore = {
  user: User | null;

  setUser: (user: User | null) => void;
  addSession: (session: Session) => void;
};

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,

  setUser: (user): void => {
    set({ user });
  },

  addSession: (session): void => {
    const state = get();
    if (state.user) {
      set({
        user: {
          ...state.user,
          session: [...state.user.session, session],
        },
      });
    }
  },
}));
