import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router';
import { Layout } from '@/components/layout/layout';
import { LoginForm } from '@/components/login-form/login-form';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Title } from '@/components/title/title';
import { ROUTES } from '@/constants/constants';

import styles from './auth.module.css';

const cx = classNames.bind(styles);

const AuthToggle = ({ isRegisterPage }: { isRegisterPage: boolean }) => {
  return (
    <div className={cx('form-toggler')}>
      <span>{isRegisterPage ? 'Already have an account?' : 'No account?'} </span>

      <Link to={isRegisterPage ? `/${ROUTES.login}` : `/${ROUTES.register}`}>
        {isRegisterPage ? 'Login' : 'Register'}
      </Link>
    </div>
  );
};

export const Auth = () => {
  const location = useLocation();
  const isRegisterPage = location.pathname === `/${ROUTES.register}`;

  const page = isRegisterPage ? 'register' : 'login';

  return (
    <Layout>
      <div className={cx('page-container')}>
        <section className={cx('title-section')}>
          <Title size="large">Welcome to Tandem!</Title>
          <Paragraph text="Login or register to start learning"></Paragraph>
        </section>
        {/* TODO: change this construction to use the page parameter */}
        {isRegisterPage ? <LoginForm page={page} /> : <LoginForm />}
        <AuthToggle isRegisterPage={isRegisterPage} />
      </div>
    </Layout>
  );
};
