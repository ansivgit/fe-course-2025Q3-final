const MS_IN_SECOND = 1000;

export const formatTimestampToMonthYear = (timestamp: string | number): string => {
  return new Date(Number(timestamp) * MS_IN_SECOND).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};
