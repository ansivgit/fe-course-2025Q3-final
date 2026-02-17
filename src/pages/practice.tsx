import { Button } from '@/components/button/button';
import { Layout } from '@/components/layout/layout';
import { Title } from '@/components/title/title';
import { ROUTES } from '@/constants/constants';

import type { ReactElement } from 'react';
import { Link } from 'react-router';

export const Practice = (): ReactElement => {
  return (
    <Layout>
      <Title>Practice</Title>
      <Link to={`/${ROUTES.login}`}>
        <Button>Login</Button>
      </Link>
    </Layout>
  );
};
