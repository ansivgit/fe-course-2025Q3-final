import { API_ENDPOINTS, API_URL } from '@/constants/constants';

import type { AuthFormFields, LoginCredentials, LoginResponse } from '@/types/user';

const LOGIN_ENDPOINT = `${API_URL}/${API_ENDPOINTS.AUTH.LOGIN}`;
const SIGNUP_ENDPOINT = `${API_URL}/${API_ENDPOINTS.AUTH.SIGNUP}`;

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

    console.info('User successfully logged in:', result.data);
    return result;
  } catch (error) {
    console.error('Unexpected login error:', error);
    throw error;
  }
};

export const register = async ({
  login,
  name,
  password,
}: AuthFormFields): Promise<LoginResponse> => {
  try {
    const response = await fetch(SIGNUP_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ login, name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result: LoginResponse = await response.json();

    if (!response.ok) {
      console.error('Signup API error:', result);
    }

    console.info('User successfully signed up:', result.data);
    return result;
  } catch (error) {
    console.error('Unexpected signup error:', error);
    throw error;
  }
};
