import React, { useState, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import Login from '@pages/login';
import Navbar from './navbar/Navbar';
import GlobalStyle from './GlobalStyle';
import { reactChildren } from '@globals/types';

export const Provider = ({ children, location }: { children: reactChildren }) => {
  const [username, setUsername] = useState<string>(null);
  const [userEmail, setUserEmail] = useState<string>(null);
  const [userRole, setUserRole] = useState<string>(null);
  const contextObject = { username, setUsername, userEmail, setUserEmail, userRole, setUserRole };

  useEffect(() => {
    console.log(location.pathname);
  }, [location])

  return (
    <UserContext.Provider value={contextObject}>
      <GlobalStyle />
      <Navbar />
      {username ? children : <Login />}
    </UserContext.Provider>
  );
};

export default function GlobalProvider({ element }: { element: reactChildren }) {
  return (
    <Provider>
      {element}
    </Provider>
  );
}
