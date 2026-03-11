export const arrayShuffle = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let index = shuffledArray.length - 1; index > 0; index--) {
    const index_ = Math.floor(Math.random() * (index + 1));
    [shuffledArray[index], shuffledArray[index_]] = [shuffledArray[index_], shuffledArray[index]];
  }
  return shuffledArray;
};
