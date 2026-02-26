import type { LoginCredentials, LoginResponse } from '@/types/user';

const API_URL = 'http://localhost:3000';
const LOGIN_ENDPOINT = `${API_URL}/auth/login`;

export const loginApi = async ({ login, password }: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await fetch(LOGIN_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Login API error:', error);

      return {
        data: null,
        error: {
          code: 'UNEXPECTED_SERVER_RESPONSE',
          message: error,
        },
      };
    }

    const result: LoginResponse = await response.json();

    console.warn(`User successfully logged in: ${login}`);
    return result;
  } catch (error) {
    console.error('Unexpected login error:', error);
    throw error;
  }
};
