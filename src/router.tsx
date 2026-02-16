import { Dashboard } from '@/pages/dashboard';
import { Landing } from '@/pages/landing';
import { Login } from '@/pages/login';
import { Mentor } from '@/pages/mentor';
import { NotFound } from '@/pages/not-found';
import { Practice } from '@/pages/practice';
import { Profile } from '@/pages/profile';
import { Register } from '@/pages/register';

import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

export const ROUTES = {
  landing: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  practice: '/practice',
  mentor: '/mentor',
  profile: '/profile',
  notFound: '*',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const AppRouter = (): ReactElement => (
  <Routes>
    <Route path={ROUTES.landing} element={<Landing />} />
    <Route path={ROUTES.login} element={<Login />} />
    <Route path={ROUTES.register} element={<Register />} />
    <Route path={ROUTES.dashboard} element={<Dashboard />} />

    <Route path={ROUTES.practice} element={<Practice />} />
    <Route path={ROUTES.mentor} element={<Mentor />} />
    <Route path={ROUTES.profile} element={<Profile />} />

    <Route path={ROUTES.notFound} element={<NotFound />} />
  </Routes>
);
