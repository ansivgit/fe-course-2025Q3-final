import { Button } from '@/components/button/button';
import { Layout } from '@/components/layout/layout';
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
      <Button onClick={handleLogin}>Login</Button>
    </Layout>
  );
};
