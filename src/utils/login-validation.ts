export const loginRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

export const validateLogin = (value: string): boolean => {
  return loginRegex.test(value);
};

export const validatePassword = (value: string): boolean => {
  return passwordRegex.test(value);
};
