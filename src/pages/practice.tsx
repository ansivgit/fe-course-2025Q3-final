import { Title } from '@/components/title/title';

import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const Practice = (): ReactElement => {
  return (
    <div>
      <Title>Practice</Title>
      <Outlet />
    </div>
  );
};
