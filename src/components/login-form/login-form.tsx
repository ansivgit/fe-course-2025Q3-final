import mailIcon from '@/assets/icons/email.svg';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';
import { PasswordInput } from '../password-input/password-input';
import '@/styles/index.css';

type LoginFormProps = {
  onSubmit: (credentials: { email: string; password: string }) => string;
};

export const LoginForm = ({ onSubmit }: LoginFormProps): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    setErrorMessage('');
  };

  const handleLoginClick = (): void => {
    const message = onSubmit({ email, password });
    setErrorMessage(message);
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
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          leftIcon={<img src={mailIcon} alt="Mail" />}
        />

        <PasswordInput value={password} onChange={handlePasswordChange} />

        {errorMessage && <div className="form-error">{errorMessage}</div>}

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
