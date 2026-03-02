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

export type AuthFormFields = Pick<User, 'login' | 'password' | 'name'>;

export type LoginResponse = {
  data: User | null;
  error: ErrorResponse | null;
};

export type ErrorResponse = {
  code?: string;
  message: string;
};

export type LoginErrors = {
  loginError?: string;
  passwordError?: string;
};
