import mailIcon from '@/assets/icons/email.svg';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';
import { PasswordInput } from '../password-input/password-input';
import '@/styles/index.css';

export const LoginForm = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleLoginClick = (): void => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }
    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
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

        <Button size="large" onClick={handleLoginClick}>
          Login
        </Button>
      </form>
    </div>
  );
};
