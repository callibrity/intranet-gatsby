import { createContext } from 'react';
import { setStateFunction } from '@globals/types';

interface UserContextInterface {
  username: string,
  setUsername: setStateFunction<string>,
  userEmail: string,
  setUserEmail: setStateFunction<string>,
  userRole: string,
  setUserRole: setStateFunction<string>,
  signIn: Function,
  signOut: Function
};

export const mockContext = createContext(null);

export const UserContext = createContext<UserContextInterface>(null);