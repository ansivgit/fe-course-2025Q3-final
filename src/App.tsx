import '@/styles/index.css';

import { Layout } from '@/components/layout/layout';

import type { ReactElement } from 'react';
import { LoginForm } from './components/login-form/login-form';

export function App(): ReactElement {
  return (
    <Layout>
      <h1>Hello, Tandem</h1>
      <LoginForm isRegistered={false} />
    </Layout>
  );
}
