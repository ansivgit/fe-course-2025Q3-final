export type User = {
  id: string;
  userName: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  session: Session[];
  settings: Settings;
};

export type Settings = unknown;

export type Session = unknown;
