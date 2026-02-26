console.log('use login form');

// import { loginApi, registerApi } from '@/service/login';
// import { validateLogin, validateName, validatePassword } from '@/utils/login-validation';
// import { ROUTES } from '@/constants/constants';

// import type { LoginErrors } from '@/types/user';

// import type { SyntheticEvent } from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// type UseLoginFormReturn = {
//   isRegistered: boolean;
//   resetSignal: number;
//   toggleAuth: () => void;
//   errorMessage: string;
//   errors: LoginErrors;
//   isValid: {
//     name: boolean;
//     login: boolean;
//     password: boolean;
//   };
//   showPassword: boolean;
//   toggleShowPassword: () => void;
//   handleNameChange: (isBlur: boolean, value: string) => void;
//   handleLoginChange: (isBlur: boolean, value: string) => void;
//   handlePasswordChange: (isBlur: boolean, value: string) => void;
//   handleSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
// };

// const initialErrors: LoginErrors = {
//   nameError: '',
//   loginError: '',
//   passwordError: '',
// };

// export const useLoginForm = (): UseLoginFormReturn => {
//   const navigate = useNavigate();
//   const [isRegistered, setIsRegistered] = useState(true);
//   const [resetSignal, setResetSignal] = useState(0);

//   const toggleAuth = (): void => {
//     setIsRegistered((previous) => !previous);

//     setErrors(initialErrors);
//     setErrorMessage('');
//     setIsValid({
//       name: false,
//       login: false,
//       password: false,
//     });
//     setResetSignal((previous) => previous + 1);
//   };

//   const [errors, setErrors] = useState(initialErrors);
//   const [errorMessage, setErrorMessage] = useState('');

//   const [isValid, setIsValid] = useState({
//     name: false,
//     login: false,
//     password: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = (): void => {
//     setShowPassword((previous) => !previous);
//   };

//   const handleNameChange = (isBlur: boolean, value: string): void => {
//     const nameError = validateName(value);

//     setIsValid((previous) => ({
//       ...previous,
//       name: !nameError,
//     }));

//     if (isBlur) {
//       setErrors((previous) => ({ ...previous, nameError }));
//     } else {
//       setErrors((previous) => ({ ...previous, nameError: '' }));
//       setErrorMessage('');
//     }
//   };

//   const handleLoginChange = (isBlur: boolean, value: string): void => {
//     const loginError = validateLogin(value);

//     setIsValid((previous) => ({
//       ...previous,
//       login: !loginError,
//     }));

//     if (isBlur) {
//       setErrors((previous) => ({ ...previous, loginError }));
//     } else {
//       setErrors((previous) => ({ ...previous, loginError: '' }));
//       setErrorMessage('');
//     }
//   };

//   const handlePasswordChange = (isBlur: boolean, value: string): void => {
//     const passwordError = validatePassword(value);

//     setIsValid((previous) => ({
//       ...previous,
//       password: !passwordError,
//     }));

//     if (isBlur) {
//       setErrors((previous) => ({ ...previous, passwordError }));
//     } else {
//       setErrors((previous) => ({ ...previous, passwordError: '' }));
//       setErrorMessage('');
//     }
//   };

//   const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     const name = getString(formData, 'name');
//     const login = getString(formData, 'login');
//     const password = getString(formData, 'password');

//     const response = isRegistered
//       ? loginApi({ login, password })
//       : registerApi({ name, login, password });

//     setErrorMessage(response.message);
//     console.warn(response.user);

//     if (response.success) {
//       void navigate(`/${ROUTES.practice}`);
//     }
//   };

//   return {
//     isRegistered,
//     resetSignal,
//     toggleAuth,
//     errorMessage,
//     errors,
//     isValid,
//     showPassword,
//     toggleShowPassword,
//     handleNameChange,
//     handleLoginChange,
//     handlePasswordChange,
//     handleSubmit,
//   };
// };

// const getString = (formData: FormData, key: string): string => {
//   const value = formData.get(key);
//   return typeof value === 'string' ? value : '';
// };
