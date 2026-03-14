import { BookIcon, FireIcon, MessageIcon, TargetIcon } from '@/assets/icons';

export const STAT_CARDS_CONFIG = [
  {
    id: 'sessions',
    icon: BookIcon,
    number: '24',
    text: 'Sessions',
    change: 3,
    color: 'purple',
  },
  {
    id: 'interview',
    icon: MessageIcon,
    number: '8',
    text: 'AI Interviews',
    change: 2,
    color: 'teal',
  },
  {
    id: 'score',
    icon: TargetIcon,
    number: '87%',
    text: 'Average score',
    change: 5,
    color: 'green',
  },
  {
    id: 'streak',
    icon: FireIcon,
    number: '7',
    text: 'Streak',
    extraText: 'days',
    color: 'orange',
  },
] as const;
