import { Landing } from '@/pages/landing';
import { Login } from '@/pages/login';
import { NotFound } from '@/pages/not-found';
import { Practice } from '@/pages/practice';
import { ROUTES } from '@/constants/constants';

import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const AppRouter = (): ReactElement => (
  <Routes>
    <Route path={ROUTES.landing} element={<Landing />} />
    <Route path={ROUTES.login} element={<Login />} />
    <Route path={ROUTES.practice} element={<Practice />} />
    <Route path={ROUTES.notFound} element={<NotFound />} />
  </Routes>
);
