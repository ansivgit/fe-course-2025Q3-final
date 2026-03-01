export const API_URL = 'http://localhost:3000';

export const ROUTES = {
  home: '/',
  auth: 'auth',
  login: 'login',
  register: 'register',
  practice: 'practice',
  quiz: 'quiz',
  notFound: '*',
} as const;

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' as const;

export const OPTION_STATUSES = ['correct', 'wrong', 'missed', 'selected', 'none'];

export type OptionStatus = (typeof OPTION_STATUSES)[number];
