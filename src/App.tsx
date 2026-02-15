import '@/styles/index.css';

import { Layout } from '@/components/layout/layout';

import type { ReactElement } from 'react';

export function App(): ReactElement {
  return (
    <Layout verticalAlign="top">
      <h1>Hello, Tandem</h1>
    </Layout>
  );
}
