import { User } from '../types';

export const register = async (userData: User) => {
  return new Promise<User>((resolve, _) => {
    setTimeout(() => resolve(userData), 3000);
  });
};
