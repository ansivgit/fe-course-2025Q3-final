export const formatTimestampToMonthYear = (timestamp: string | number): string => {
  return new Date(Number(timestamp)).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};
