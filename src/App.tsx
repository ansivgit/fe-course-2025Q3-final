import '@/styles/index.css';

import type { ReactElement } from 'react';
import { LoginForm } from './components/login-form/login-form';
import { Logo } from './components/logo/logo';

export function App(): ReactElement {
  return (
    <div>
      <h1>Hello, Tandem</h1>
      <LoginForm isRegistered={true} />
      <Logo />
      <Logo size="small" />
    </div>
  );
}
