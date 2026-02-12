import type { User } from '@/types';

import { v4 as uuid } from 'uuid';

export const mockUsers: User[] = [
  {
    id: uuid(),
    name: 'Max',
    login: 'max@example.com',
    password: 'hashed_password_123',
    createdAt: '2025-02-01',
    session: [],
    settings: {},
  },
  {
    id: uuid(),
    name: 'Leo',
    login: 'leo@example.com',
    password: 'hashed_password_456',
    createdAt: '2025-02-03',
    session: [],
    settings: {},
  },
  {
    id: uuid(),
    name: 'Mia',
    login: 'mia@example.com',
    password: 'hashed_password_789',
    createdAt: '2025-02-05',
    session: [],
    settings: {},
  },
];
