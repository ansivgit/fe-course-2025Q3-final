import type { LoginCredentials, LoginResponse } from '@/types/user';

const USER_MESSAGES = {
  emptyFields: 'Please enter email and password',
  incorrectPassword: 'Incorrect password',
  userNotFound: 'User not found',
};

export const loginApi = async ({ login, password }: LoginCredentials): Promise<LoginResponse> => {
  if (!login || !password) {
    return {
      data: null,
      error: USER_MESSAGES.emptyFields,
    };
  }

  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result: LoginResponse = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: result.error ?? USER_MESSAGES.userNotFound,
      };
    }

    console.warn(`User successfully logged in: ${login}`);
    return result;
  } catch {
    return {
      data: null,
      error: 'Server error',
    };
  }
};
