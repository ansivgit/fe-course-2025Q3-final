export const API_URL = 'http://localhost:3000';

export const ROUTES = {
  home: '/',
  login: 'login',
  register: 'register',
  practice: 'practice',
  quiz: 'quiz',
  notFound: '*',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: '/',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
  },
  DOC: '/api-doc',
} as const;

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' as const;

export const OPTION_STATUSES = ['correct', 'wrong', 'missed', 'selected', 'none'];

export type OptionStatus = (typeof OPTION_STATUSES)[number];

export const ANIMATION_DURATION = 2000;
