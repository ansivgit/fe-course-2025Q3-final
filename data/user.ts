import type { User } from '@/types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Max',
    login: 'max@example.com',
    password: 'hashed_password_123',
    createdAt: '2025-02-01',
    session: [],
    settings: {},
  },
  {
    id: 'u2',
    name: 'Leo',
    login: 'leo@example.com',
    password: 'hashed_password_456',
    createdAt: '2025-02-03',
    session: [],
    settings: {},
  },
  {
    id: 'u3',
    name: 'Mia',
    login: 'mia@example.com',
    password: 'hashed_password_789',
    createdAt: '2025-02-05',
    session: [],
    settings: {},
  },
];
