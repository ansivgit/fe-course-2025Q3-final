import { MS_IN_SECOND } from '@/constants/constants';

export const formatTimestampToMonthYear = (timestamp: string | number): string => {
  return new Date(Number(timestamp) * MS_IN_SECOND).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};
