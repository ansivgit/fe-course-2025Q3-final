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

export type RegisterCredentials = {
  name: string;
  login: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  user?: User;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  user?: User;
};

export type LoginErrors = {
  name?: string;
  login?: string;
  password?: string;
};

export type InputProps = {
  value: string;
  onChange: (value: string, error?: string) => void;
  onBlur: (error?: string) => void;
  clearError?: boolean;
};
