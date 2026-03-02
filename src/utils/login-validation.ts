export const loginRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const userNameRegex = /^[a-zA-Z0-9]{3,12}$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

export const validateLogin = (value: string): boolean => {
  return loginRegex.test(value);
};
export const validateUserName = (value: string): boolean => {
  return userNameRegex.test(value);
};

export const validatePassword = (value: string): boolean => {
  return passwordRegex.test(value);
};
