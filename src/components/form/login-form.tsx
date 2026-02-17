import mailIcon from '@/assets/icons/email.svg';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';
import { PasswordInput } from '../password-input/password-input';
import '@/styles/index.css';

export const LoginForm = (): ReactElement => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleLoginClick = (): void => {
    if (!login || !password) {
      console.warn('Please enter email and password');
      return;
    }
    console.warn(`Logging in with\nEmail: ${login}\nPassword: ${password}`);
  };

  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input
          id="login"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={login}
          onChange={handleLoginChange}
          leftIcon={<img src={mailIcon} alt="Mail" />}
        />

        <PasswordInput value={password} onChange={handlePasswordChange} />

        <Button size="large" onClick={handleLoginClick}>
          Login
        </Button>
      </form>
      <div className="form-footer">
        <span>No account? </span>
        <a href="/register" className="link">
          Register
        </a>
      </div>
    </div>
  );
};
