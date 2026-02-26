// // import loginIcon from '@/assets/icons/email.svg';
// // import eyeIcon from '@/assets/icons/eye.svg';
// // import eyeOffIcon from '@/assets/icons/eye-off.svg';
// // import passwordIcon from '@/assets/icons/password.svg';
// import { Button } from '@/components/button/button';

// import classNames from 'classnames/bind';
// import type { ReactElement } from 'react';
// import { ErrorMessage } from '../error/error-message';
// import { LoginFields } from './login-fields';
// // import { Input } from '../input/input';
// import styles from './login-form.module.css';
// import { useLoginForm } from './use-login-form';

// const cx = classNames.bind(styles);

// // export const LoginForm = (): ReactElement => {
// //   const {
// //     isRegistered,
// //     toggleAuth,
// //     errorMessage,
// //     errors,
// //     isValid,
// //     showPassword,
// //     toggleShowPassword,
// //     handleNameChange,
// //     handleLoginChange,
// //     handlePasswordChange,
// //     handleSubmit,
// //   } = useLoginForm();

// //   return (
// //     <div>
// //       <form
// //         key={isRegistered ? 'login' : 'register'}
// //         className={cx('form')}
// //         onSubmit={handleSubmit}
// //       >
// //         {!isRegistered && (
// //           <Input
// //             name="name"
// //             label="Name"
// //             placeholder="Enter your name"
// //             onChange={handleNameChange}
// //             errorMessage={errors.nameError}
// //           />
// //         )}

// //         <Input
// //           name="login"
// //           label="Email"
// //           placeholder="Enter your email"
// //           onChange={handleLoginChange}
// //           errorMessage={errors.loginError}
// //           leftIcon={<img src={loginIcon} alt="" />}
// //         />

// //         <Input
// //           name="password"
// //           label="Password"
// //           placeholder="Enter your password"
// //           type={showPassword ? 'text' : 'password'}
// //           onChange={handlePasswordChange}
// //           errorMessage={errors.passwordError}
// //           leftIcon={<img src={passwordIcon} alt="" />}
// //           rightIcon={
// //             <button type="button" onClick={toggleShowPassword}>
// //               <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
// //             </button>
// //           }
// //         />

// //         <Button type="submit" size="large" disabled={!isValid.login || !isValid.password}>
// //           {isRegistered ? 'Login' : 'Register'}
// //         </Button>

// //         <ErrorMessage message={errorMessage} />
// //       </form>

// //       <AuthToggle isRegistered={isRegistered} onToggle={toggleAuth} />
// //     </div>
// //   );
// // };

// export const LoginForm = (): ReactElement => {
//   const {
//     isRegistered,
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
//   } = useLoginForm();

//   return (
//     <div>
//       <form
//         key={isRegistered ? 'login' : 'register'}
//         className={cx('form')}
//         onSubmit={handleSubmit}
//       >
//         <LoginFields
//           isRegistered={isRegistered}
//           errors={errors}
//           showPassword={showPassword}
//           toggleShowPassword={toggleShowPassword}
//           handleNameChange={handleNameChange}
//           handleLoginChange={handleLoginChange}
//           handlePasswordChange={handlePasswordChange}
//         />

//         <Button type="submit" size="large" disabled={!isValid.login || !isValid.password}>
//           {isRegistered ? 'Login' : 'Register'}
//         </Button>

//         <ErrorMessage message={errorMessage} />
//       </form>

//       <AuthToggle isRegistered={isRegistered} onToggle={toggleAuth} />
//     </div>
//   );
// };

// type AuthToggleProps = {
//   isRegistered: boolean;
//   onToggle: () => void;
// };

// const AuthToggle = ({ isRegistered, onToggle }: AuthToggleProps): ReactElement => {
//   return (
//     <div className={cx('form-link')}>
//       <span>{isRegistered ? 'No account?' : 'Already have an account?'} </span>

//       <button type="button" onClick={onToggle}>
//         {isRegistered ? 'Register' : 'Login'}
//       </button>
//     </div>
//   );
// };
import { Button } from '@/components/button/button';
import { loginApi } from '@/service/login';
import { ROUTES } from '@/constants/constants';

import classNames from 'classnames/bind';
import type { ReactElement, SyntheticEvent } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginInput } from './inputs/login-input';
import { PasswordInput } from './inputs/password-input';
import styles from './login-form.module.css';

const cx = classNames.bind(styles);

export const LoginForm = (): ReactElement => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [serverError, setServerError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    login: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword((previous) => !previous);
  };

  const isFormInvalid = Object.values(formState).some(Boolean) || !loginValue || !passwordValue;

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    setIsSubmitted(true);

    if (isFormInvalid) {
      return;
    }

    await loginUser(loginValue, passwordValue, setServerError);
  };

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <LoginInput
          value={loginValue}
          setValue={setLoginValue}
          setServerError={setServerError}
          setFormState={setFormState}
        />

        <PasswordInput
          value={passwordValue}
          setValue={setPasswordValue}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          setServerError={setServerError}
          setFormState={setFormState}
        />

        <Button type="submit" size="large" disabled={isFormInvalid}>
          Login
        </Button>

        <p className={cx('error')}>{isSubmitted ? serverError : ''}</p>
      </form>

      <AuthToggle />
    </div>
  );
};

const AuthToggle = (): ReactElement => {
  const location = useLocation();

  const isLoginPage = location.pathname === `/${ROUTES.login}`;

  return (
    <div className={cx('form-link')}>
      <span>{isLoginPage ? 'No account?' : 'Already have an account?'} </span>

      <Link to={isLoginPage ? `/${ROUTES.register}` : `/${ROUTES.login}`}>
        {isLoginPage ? 'Register' : 'Login'}
      </Link>
    </div>
  );
};

const loginUser = async (
  login: string,
  password: string,
  setServerError: (value: string) => void,
): Promise<void> => {
  const result = await loginApi({ login, password });

  setServerError(result.error ?? '');
};
