import { Route, Routes } from 'react-router-dom';
import { Auth } from '@/pages/auth';
import { NotFound } from '@/pages/not-found';
import { Practice } from '@/pages/practice/practice';
import { WidgetPage } from '@/pages/widgets/widget';
import { ROUTES } from '@/constants/constants';
import './styles/index.css';

export function App() {
  return <AppRouter />;
}

export const AppRouter = () => (
  <Routes>
    <Route path={'/'} element={<Auth />} />
    <Route path={ROUTES.login} element={<Auth />} />
    <Route path={ROUTES.register} element={<Auth />} />
    <Route path={ROUTES.practice} element={<Practice />} />
    <Route path={`${ROUTES.practice}/:widgetId`} element={<WidgetPage />} />
    <Route path={ROUTES.notFound} element={<NotFound />} />
  </Routes>
);
