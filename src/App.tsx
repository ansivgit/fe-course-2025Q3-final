import type { ReactElement } from 'react';
import { Logo } from './components/logo/logo';

export function App(): ReactElement {
  return (
    <div>
      <h1>Hello, Tandem</h1>
      <Logo />
      <Logo size="small" />
    </div>
  );
}
