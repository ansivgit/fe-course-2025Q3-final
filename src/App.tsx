import '@/styles/index.css';

import type { ReactElement } from 'react';
import { LoginForm } from './components/form/login-form';

export function App(): ReactElement {
  return (
    <div>
      <h1>Hello, Tandem</h1>
      <LoginForm />
    </div>
  );
}
