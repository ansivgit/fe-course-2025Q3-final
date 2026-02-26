// import type {
//   LoginCredentials,
//   LoginResponse,
//   RegisterCredentials,
//   RegisterResponse,
// } from '@/types/user';

// import { v4 as uuidv4 } from 'uuid';
// import { addUser, getUser } from './data-access';

// const USER_MESSAGES = {
//   emptyFields: 'Please fill all fields',
//   incorrectPassword: 'Incorrect password',
//   userNotFound: 'Please register',
//   userExists: 'User with this email already exists',
// };

// export const loginApi = async ({ login, password }: LoginCredentials): Promise<LoginResponse> => {
//   if (!login || !password) {
//     return {
//       data: null,
//       error: USER_MESSAGES.emptyFields,
//     };
//   }

//   try {
//     const response = await fetch('http://localhost:3000/auth/login', {
//       method: 'POST',
//       body: JSON.stringify({ login, password }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const result: LoginResponse = await response.json();

//     if (!response.ok) {
//       return {
//         data: null,
//         error: result.error ?? USER_MESSAGES.userNotFound,
//       };
//     }

//   return { success: true, message: '', user };
// };

// // export const registerApi = ({ name, login, password }: RegisterCredentials): RegisterResponse => {
// //   if (!name || !login || !password) {
// //     return { success: false, message: USER_MESSAGES.emptyFields };
// //   }

// //   const existingUser = getUser(login);

// //   if (existingUser) {
// //     return { success: false, message: USER_MESSAGES.userExists };
// //   }

// //   const user = addUser({
// //     id: uuidv4(),
// //     name,
// //     login,
// //     password,
// //     createdAt: new Date().toISOString(),
// //     session: [],
// //     settings: {},
// //   });

// //   console.warn('Login successful, redirecting to Practice', user);
// //   return { success: true, message: '', user };
// //     console.warn(`User successfully logged in: ${login}`);
//     return result;
//   } catch {
//     return {
//       data: null,
//       error: 'Please register',
//     };
//   }
// };

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
      error: 'Please register',
    };
  }
};
