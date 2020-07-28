import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '@globals/contexts';
import theme from '@globals/theme';
import Navbar from '@navbar/Navbar';
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
      <ThemeProvider theme={theme}>
        <Navbar />
        <GlobalStyle />
        {component}
      </ThemeProvider>
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

