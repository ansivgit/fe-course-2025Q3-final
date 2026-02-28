export const ROUTES = {
  home: '/',
  login: '/login',
  practice: '/practice',
  quiz: '/quiz',
  notFound: '*',
} as const;

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' as const;

export const OPTION_STATUSES = ['correct', 'wrong', 'missed', 'selected', 'none'];

export type OptionStatus = (typeof OPTION_STATUSES)[number];
