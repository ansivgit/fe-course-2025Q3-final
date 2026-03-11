export const API_URL = 'http://localhost:3000';

export const ROUTES = {
  home: '/',
  login: 'login',
  register: 'register',
  dashboard: 'dashboard',
  practice: 'practice',
  quiz: 'quiz',
  notFound: '*',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: '/',
  AUTH: {
    LOGIN: 'auth/login',
    SIGNUP: 'auth/signup',
  },
  DATA: 'data',
} as const;

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' as const;

export const OPTION_STATUSES = ['correct', 'wrong', 'missed', 'selected', 'none'];

export type OptionStatus = (typeof OPTION_STATUSES)[number];

export const ANIMATION_DURATION = 2000;

export const MS_IN_SECOND = 1000;
