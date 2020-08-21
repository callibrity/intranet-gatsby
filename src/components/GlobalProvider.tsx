import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { UserContext } from '@globals/contexts';
import Login from '@pages/login';
import Navbar from './navbar/Navbar';
import GlobalStyle from './GlobalStyle';

type htmlNodeType = React.ReactNode[] | React.ReactElement;

export const Provider = ({ children }: {children: htmlNodeType}) => {
  const [username, setUsername] = useState<string>(null);
  const [userEmail, setUserEmail] = useState<string>(null);
  const [userRole, setUserRole] = useState<string>(null);

  const component = username ? children : <Login />;

  return (
    <UserContext.Provider value={{
      username, setUsername, userEmail, setUserEmail, userRole, setUserRole
    }}
    >
      <GlobalStyle />
      <Navbar />
      {component}
    </UserContext.Provider>
  );
};

export default function GlobalProvider({ element }: {element: htmlNodeType}) {
  return (
    <Provider>
      {element}
    </Provider>
  );
}
