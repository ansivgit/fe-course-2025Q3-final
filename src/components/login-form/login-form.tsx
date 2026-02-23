import loginIcon from '@/assets/icons/email.svg';
import eyeIcon from '@/assets/icons/eye.svg';
import eyeOffIcon from '@/assets/icons/eye-off.svg';
import passwordIcon from '@/assets/icons/password.svg';
import { Button } from '@/components/button/button';

// import { isValid } from '@/utils/login-validation';

import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { ErrorMessage } from '../error/error-message';
import { Input } from '../input/input';
import styles from './login-form.module.css';
import { useLoginForm } from './use-login-form';

const cx = classNames.bind(styles);

export const LoginForm = (): ReactElement => {
  // const navigate = useNavigate();

  // const {
  //   isRegistered,
  //   name,
  //   login,
  //   password,
  //   errors,
  //   errorMessage,
  //   clearInputsError,
  //   handleNameChange,
  //   handleLoginChange,
  //   handlePasswordChange,
  //   handleNameBlur,
  //   handleLoginBlur,
  //   handlePasswordBlur,
  //   toggleAuth,
  //   submitForm,
  // } = useLoginForm();

  // const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
  //   event.preventDefault();
  //   submitForm(navigate);
  // };
  const {
    errorMessage,
    // errors,
    isValid,
    showPassword,
    toggleShowPassword,
    handleLoginChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <div>
      <form className={cx('form')} onSubmit={handleSubmit}>
        {/* {!isRegistered && (
          <NameInput
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            clearError={clearInputsError}
          />
        )}

        <EmailInput
          value={login}
          onChange={handleLoginChange}
          onBlur={handleLoginBlur}
          clearError={clearInputsError}
        />

        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          clearError={clearInputsError} */}
        <Input
          name="login"
          label="Email"
          placeholder="Enter your email"
          onChange={handleLoginChange}
          // errorMessage={errors.loginError}
          leftIcon={<img src={loginIcon} alt="" />}
        />

        <Input
          name="password"
          label="Password"
          placeholder="Enter your password"
          type={showPassword ? 'text' : 'password'}
          onChange={handlePasswordChange}
          // errorMessage={errors.passwordError}
          leftIcon={<img src={passwordIcon} alt="" />}
          rightIcon={
            <button type="button" onClick={toggleShowPassword}>
              <img src={showPassword ? eyeOffIcon : eyeIcon} alt="" />
            </button>
          }
        />
        {/* <Button size="large" disabled={!isValid(errors, !isRegistered)}>
          {isRegistered ? 'Login' : 'Register'}
        </Button> */}

        {/* <div className={cx('error')}>{errorMessage || '\u00A0'}</div>
      </form>

      <AuthToggle isRegistered={isRegistered} onToggle={toggleAuth} /> */}
        <ErrorMessage message={errorMessage} />

        <Button type="submit" size="large" disabled={!isValid.login || !isValid.password}>
          Login
        </Button>
      </form>

      <AuthToggle />
    </div>
  );
};

// export const AuthToggle = ({ isRegistered, onToggle }: AuthToggleProps): ReactElement => {
//   const text = isRegistered ? 'No account?' : 'Already have an account?';

//   const linkText = isRegistered ? 'Register' : 'Login';

//   return (
//     <div className={cx('form-toggle')}>
//       <span>{text} </span>
//       <button type="button" className={cx('link')} onClick={onToggle}>
//         {linkText}
const AuthToggle = (): ReactElement => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className={cx('form-link')}>
      <span>{isRegistered ? 'No account?' : 'Already have an account?'} </span>

      <button
        type="button"
        onClick={() => {
          setIsRegistered((previous) => !previous);
        }}
      >
        {isRegistered ? 'Register' : 'Login'}
      </button>
    </div>
  );
};
