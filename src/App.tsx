import '@/styles/index.css';

import type { ReactElement } from 'react';
import { checkLogin } from './components/login-form/check-login';
import { LoginForm } from './components/login-form/login-form';
import { Logo } from './components/logo/logo';

export function App(): ReactElement {
  return (
    <div>
      <h1>Hello, Tandem</h1>
      <LoginForm onSubmit={checkLogin} />
      <Logo />
      <Logo size="small" />
    </div>
  );
}
