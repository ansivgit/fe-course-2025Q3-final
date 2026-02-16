import { Button } from '@/components/button/button';
import { Title } from '@/components/title/title';

import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = (): ReactElement => {
  return (
    <div>
      <Title>Dashboard</Title>
      <Link to="/practice">
        <Button>Go to Practice</Button>
      </Link>
    </div>
  );
};
