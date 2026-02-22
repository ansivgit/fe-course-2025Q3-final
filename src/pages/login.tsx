import { Button } from '@/components/button/button';
import { Layout } from '@/components/layout/layout';
import { LoginForm } from '@/components/login-form/login-form';
import { Title } from '@/components/title/title';
import { ROUTES } from '@/constants/constants';

import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = (): ReactElement => {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    void navigate(`/${ROUTES.practice}`);
  };

  return (
    <Layout verticalAlign="center">
      <Title>Login</Title>
      <LoginForm />
      <Button onClick={handleLogin}>Practice</Button>
    </Layout>
  );
};
