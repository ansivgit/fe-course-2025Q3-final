import '@/styles/index.css';

import { Layout } from '@/components/layout/layout';

import type { ReactElement } from 'react';
import { Logo } from './components/logo/logo';

export function App(): ReactElement {
  return (
    <Layout verticalAlign="center">
      <Logo />
      <Logo size="small" />
    </Layout>
  );
}
