import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { UserContext } from '@globals/contexts';
import Navbar from './navbar/Navbar';
import Login from '@pages/login';
import GlobalStyle from './GlobalStyle';

type htmlNodeType = React.ReactNode[] | React.ReactElement;

export const Provider = ({ children }: {children: htmlNodeType}) => {
  const [username, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const component = username ? children : <Login />;

return (
    <UserContext.Provider value={{
      username, setUsername, userEmail, setUserEmail,
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

