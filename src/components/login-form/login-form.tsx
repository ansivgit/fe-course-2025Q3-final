// import loginIcon from '@/assets/icons/email.svg';
// import eyeIcon from '@/assets/icons/eye.svg';
// import eyeOffIcon from '@/assets/icons/eye-off.svg';
// import passwordIcon from '@/assets/icons/password.svg';
import { Button } from '@/components/button/button';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { ErrorMessage } from '../error/error-message';
import { LoginFields } from './login-fields';
// import { Input } from '../input/input';
import styles from './login-form.module.css';
import { useLoginForm } from './use-login-form';

const cx = classNames.bind(styles);

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
//         {!isRegistered && (
//           <Input
//             name="name"
//             label="Name"
//             placeholder="Enter your name"
//             onChange={handleNameChange}
//             errorMessage={errors.nameError}
//           />
//         )}

//         <Input
//           name="login"
//           label="Email"
//           placeholder="Enter your email"
//           onChange={handleLoginChange}
//           errorMessage={errors.loginError}
//           leftIcon={<img src={loginIcon} alt="" />}
//         />

//         <Input
//           name="password"
//           label="Password"
//           placeholder="Enter your password"
//           type={showPassword ? 'text' : 'password'}
//           onChange={handlePasswordChange}
//           errorMessage={errors.passwordError}
//           leftIcon={<img src={passwordIcon} alt="" />}
//           rightIcon={
//             <button type="button" onClick={toggleShowPassword}>
//               <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
//             </button>
//           }
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

export const LoginForm = (): ReactElement => {
  const {
    isRegistered,
    toggleAuth,
    errorMessage,
    errors,
    isValid,
    showPassword,
    toggleShowPassword,
    handleNameChange,
    handleLoginChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <div>
      <form
        key={isRegistered ? 'login' : 'register'}
        className={cx('form')}
        onSubmit={handleSubmit}
      >
        <LoginFields
          isRegistered={isRegistered}
          errors={errors}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
          handleNameChange={handleNameChange}
          handleLoginChange={handleLoginChange}
          handlePasswordChange={handlePasswordChange}
        />

        <Button type="submit" size="large" disabled={!isValid.login || !isValid.password}>
          {isRegistered ? 'Login' : 'Register'}
        </Button>

        <ErrorMessage message={errorMessage} />
      </form>

      <AuthToggle isRegistered={isRegistered} onToggle={toggleAuth} />
    </div>
  );
};

type AuthToggleProps = {
  isRegistered: boolean;
  onToggle: () => void;
};

const AuthToggle = ({ isRegistered, onToggle }: AuthToggleProps): ReactElement => {
  return (
    <div className={cx('form-link')}>
      <span>{isRegistered ? 'No account?' : 'Already have an account?'} </span>

      <button type="button" onClick={onToggle}>
        {isRegistered ? 'Register' : 'Login'}
      </button>
    </div>
  );
};
