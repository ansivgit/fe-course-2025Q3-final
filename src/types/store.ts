import type { Session, User } from '@/types/user';

export type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
  addSession: (session: Session) => void;
};
