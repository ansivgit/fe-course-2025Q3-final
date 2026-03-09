import { create } from 'zustand';
import type { Session, User } from '@//types/user';

export type UserStore = {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;

  setUser: (user: User | null) => void;
  addSession: (session: Session) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const userStore = create<UserStore>((set, get) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,

  setUser: (user): void => {
    set({ user, isLoggedIn: !!user });
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

  setLoading: (loading): void => {
    set({ loading });
  },

  setError: (error): void => {
    set({ error });
  },
}));
