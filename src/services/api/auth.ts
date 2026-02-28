import { API_URL, ROUTES } from '@/constants/constants';

import type { LoginCredentials, LoginResponse } from '@/types/user';

const LOGIN_ENDPOINT = `${API_URL}/${ROUTES.auth}/${ROUTES.login}`;

export const login = async ({ login, password }: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await fetch(LOGIN_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result: LoginResponse = await response.json();

    if (!response.ok) {
      console.error('Login API error:', result);
    }

    console.info(`User successfully logged in: ${login}`);
    return result;
  } catch (error) {
    console.error('Unexpected login error:', error);
    throw error;
  }
};
