import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/login';
import { NotFound } from '@/pages/not-found';
import { Practice } from '@/pages/practice/practice';
import { ROUTES } from '@/constants/constants';

import './styles/index.css';

export function App() {
  return <AppRouter />;
}

export const AppRouter = () => (
  <Routes>
    <Route path={'/'} element={<Login />} />
    <Route path={ROUTES.login} element={<Login />} />
    <Route path={ROUTES.practice} element={<Practice />} />
    <Route path={ROUTES.notFound} element={<NotFound />} />
  </Routes>
);
