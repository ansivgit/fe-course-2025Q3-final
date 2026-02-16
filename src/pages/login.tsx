import { Button } from '@/components/button/button';
import { Title } from '@/components/title/title';

import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = (): ReactElement => {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    void navigate('/dashboard');
  };

  return (
    <div>
      <Title>Login</Title>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
