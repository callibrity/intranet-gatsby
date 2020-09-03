import { createContext } from 'react';
import { setStateFunction } from '@globals/types';

interface UserContextInterface {
  username: string,
  userEmail: string,
  userRole: string,
  signIn: Function,
  signOut: Function
};

export const mockContext = createContext(null);

export const UserContext = createContext<UserContextInterface>(null);