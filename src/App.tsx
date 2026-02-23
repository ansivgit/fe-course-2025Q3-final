import '@/styles/index.css';

import { Login } from '@/pages/login';
import { NotFound } from '@/pages/not-found';
import { Practice } from '@/pages/practice';
import { ROUTES } from '@/constants/constants';

import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Quiz } from './pages/practice/quiz';

export function App(): ReactElement {
  return <AppRouter />;
}

export const AppRouter = (): ReactElement => (
  <Routes>
    <Route path={'/'} element={<Login />} />
    <Route path={ROUTES.login} element={<Login />} />
    <Route path={ROUTES.practice} element={<Practice />} />
    <Route path={`${ROUTES.practice}/quiz`} element={<Quiz />} />
    <Route path={ROUTES.notFound} element={<NotFound />} />
  </Routes>
);
