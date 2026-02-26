import { LoginForm } from '@/components/login-form/login-form';
import { Logo } from '@/components/logo/logo';
import { Title } from '@/components/title/title';

import type { ReactElement } from 'react';

export const Register = (): ReactElement => {
  return (
    <div className="center">
      <div className={'title-section'}>
        <Logo />
        <Title>Welcome to the platform!</Title>
        <p className={'description'}>Join us and start learning</p>
      </div>
      <LoginForm />
    </div>
  );
};
