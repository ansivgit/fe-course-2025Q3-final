import { create } from 'zustand';
import type { AuthFormFields, LoginCredentials, Session, User } from '@//types/user';
import { login, register } from '@/services/api/auth';

export type UserStore = {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;

  login: (credentials: LoginCredentials) => Promise<void>;
  register: (fields: AuthFormFields) => Promise<void>;
  logout: () => void;
  addSession: (session: Session) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

const handleLogin = async (
  credentials: LoginCredentials,
  set: (function_: Partial<UserStore>) => void,
): Promise<void> => {
  try {
    set({ loading: true, error: null });
    const response = await login(credentials);

    if (response.data) {
      set({ user: response.data, isLoggedIn: true });
    } else if (response.error) {
      set({ error: response.error.message || 'Login Error' });
    }
  } catch {
    set({ error: 'Authorization Error' });
  } finally {
    set({ loading: false });
  }
};

const handleRegister = async (
  fields: AuthFormFields,
  set: (function_: Partial<UserStore>) => void,
): Promise<void> => {
  try {
    set({ loading: true, error: null });
    const response = await register(fields);

    if (response.data) {
      set({ user: response.data, isLoggedIn: true });
    } else if (response.error) {
      set({ error: response.error.message || 'Registration Error' });
    }
  } catch {
    set({ error: 'Authorization Error' });
  } finally {
    set({ loading: false });
  }
};

export const userStore = create<UserStore>((set, get) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,

  login: (credentials): Promise<void> => {
    return handleLogin(credentials, set);
  },

  register: (fields): Promise<void> => {
    return handleRegister(fields, set);
  },

  logout: (): void => {
    set({ user: null, isLoggedIn: false });
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
