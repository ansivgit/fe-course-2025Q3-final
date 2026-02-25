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

export type LoginCredentials = Pick<User, 'login' | 'password'>;

export type LoginResponse = {
  data: User | null;
  error: string | null;
};

export type LoginErrors = {
  loginError?: string;
  passwordError?: string;
};

export type FormState = {
  login: boolean;
  password: boolean;
};
