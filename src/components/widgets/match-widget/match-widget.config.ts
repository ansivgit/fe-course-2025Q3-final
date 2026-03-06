import { CodeIcon, MatchGameIcon, QuizIcon } from '@/assets/icons';

export const MATCH_WIDGET_CONFIG = [
  {
    name: 'quiz',
    image: QuizIcon,
    heading: 'Quiz',
    subheading: 'Test your knowledge with multiple questions',
    tasks: '150 questions',
    time: '2 min',
    color: 'purple',
  },
  {
    name: 'match-game',
    image: MatchGameIcon,
    heading: 'Memory Game',
    subheading: 'Find and match all pairs of concept cards',
    tasks: '20 Pairs',
    time: '5 min',
    color: 'teal',
  },
  {
    name: 'code-order',
    image: CodeIcon,
    heading: 'Code Ordering',
    subheading: 'Arrange lines of code in the correct order',
    tasks: '50 tasks',
    time: '3 min',
    color: 'pink',
  },
] as const;
