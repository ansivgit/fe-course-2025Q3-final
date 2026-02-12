import type { User } from '@/types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    userName: 'Max',
    email: 'max@example.com',
    passwordHash: 'hashed_password_123',
    createdAt: '2025-02-01',
    session: [],
    settings: {},
  },
  {
    id: 'u2',
    userName: 'Leo',
    email: 'leo@example.com',
    passwordHash: 'hashed_password_456',
    createdAt: '2025-02-03',
    session: [],
    settings: {},
  },
  {
    id: 'u3',
    userName: 'Mia',
    email: 'mia@example.com',
    passwordHash: 'hashed_password_789',
    createdAt: '2025-02-05',
    session: [],
    settings: {},
  },
];
