// import { useNavigate } from 'react-router-dom';
// import { Button } from '@/components/button/button';
// import { Layout } from '@/components/layout/layout';

import { LoginForm } from '@/components/login-form/login-form';
import { Logo } from '@/components/logo/logo';
import { Title } from '@/components/title/title';

export const Login = () => {
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   void navigate(`/${ROUTES.practice}`);
  // };

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
