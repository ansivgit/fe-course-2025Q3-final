import { Layout } from '@/components/layout/layout';
import { LoginForm } from '@/components/login-form/login-form';

import type { ReactElement } from 'react';

export const Login = (): ReactElement => {
  return (
    <Layout verticalAlign="center">
      <LoginForm />
    </Layout>
  );
};
