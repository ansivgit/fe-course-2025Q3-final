import '@/styles/index.css';

import { Login } from '@/pages/login';
import { NotFound } from '@/pages/not-found';
import { Practice } from '@/pages/practice/practice';
import { WidgetPage } from '@/pages/widgets/widget';
import { ROUTES } from '@/constants/constants';

import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

export function App(): ReactElement {
  return <AppRouter />;
}

export const AppRouter = (): ReactElement => (
  <Routes>
    <Route path={'/'} element={<Login />} />
    <Route path={ROUTES.login} element={<Login />} />
    <Route path={ROUTES.practice} element={<Practice />} />
    <Route path={`${ROUTES.practice}/:widgetId`} element={<WidgetPage />} />
    <Route path={ROUTES.notFound} element={<NotFound />} />
  </Routes>
);
