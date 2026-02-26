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

export type RegisterCredentials = {
  name: string;
  login: string;
  password: string;
};

export type LoginResponse = {
  data: User | null;
  error: string | null;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  user?: User;
};

export type LoginErrors = {
  nameError?: string;
  loginError?: string;
  passwordError?: string;
};

export type FormState = {
  login: boolean;
  password: boolean;
};
