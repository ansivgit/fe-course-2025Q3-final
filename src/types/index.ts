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
  success: boolean;
  message: string;
  user?: Omit<User, 'password'>;
};

export type LoginErrors = {
  login?: string;
  password?: string;
};

export type InputProps = {
  value: string;
  onChange: (value: string, error?: string) => void;
  onBlur: (error?: string) => void;
};
