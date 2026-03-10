import { create } from 'zustand';

import type { UserStore } from '@/types/store';

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,

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
