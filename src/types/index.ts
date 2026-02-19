export type User = {
  id: string;
  name: string;
  login: string;
  password: string;
  createdAt: string;
  session: Session[];
  settings: Settings;
};

export type Settings = unknown;

export type Session = unknown;

export type LoginCredentials = {
  login: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  user?: Omit<User, 'password'>;
};

export type LoginErrors = {
  login?: string;
  password?: string;
};
