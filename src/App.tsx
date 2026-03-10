import { Route, Routes } from 'react-router';
import { Auth } from '@/pages/auth/auth';
import { Dashboard } from '@/pages/dashboard/dashboard';
import { NotFound } from '@/pages/not-found';
import { Practice } from '@/pages/practice/practice';
import { WidgetPage } from '@/pages/widgets/widget';
import { ROUTES } from '@/constants/constants';
import './styles/index.css';

import { MatchGame } from '@/components/match-game/match-game';

export function App() {
  return <AppRouter />;
}

export const AppRouter = () => (
  <Routes>
    <Route path={'/'} element={<Auth />} />
    <Route path={ROUTES.login} element={<Auth />} />
    <Route path={ROUTES.register} element={<Auth />} />
    <Route path={ROUTES.practice} element={<Practice />} />
    {/* TODO: Add nested routes */}
    <Route path="/practice/match-game" element={<MatchGame />} />
    <Route path={`${ROUTES.practice}/:widgetId`} element={<WidgetPage />} />
    <Route path={ROUTES.dashboard} element={<Dashboard />} />
    <Route path={ROUTES.notFound} element={<NotFound />} />
  </Routes>
);
