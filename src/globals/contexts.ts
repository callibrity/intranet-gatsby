import { createContext, Dispatch, SetStateAction } from 'react';
import { setStateFunction } from '@globals/types';

interface UserContextInterface {
  username: string, 
  setUsername: setStateFunction<string>, 
  userEmail: string, 
  setUserEmail: setStateFunction<string>, 
  userRole: string, 
  setUserRole: setStateFunction<string>
};

export const UserContext = createContext<UserContextInterface>(null);

export const ProfileContext = createContext(null);
