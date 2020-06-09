import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "components/GlobalStyle"
import { UserContext } from "globals/UserContext" 
import theme from "globals/theme" 
import Navbar from "navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "pages/login"

const Provider = function({children}) {
  const [username, setUsername] = useState(null)
  const [userEmail, setUserEmail] = useState(null)

  const component = username ? children : <Login />
  return(
    <UserContext.Provider value={{username, setUsername, userEmail, setUserEmail}}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <GlobalStyle />
        {component}
      </ThemeProvider>
    </UserContext.Provider>
  )
}
  
export default function GlobalProvider ({element}) {
  return (
    <Provider>
      {element}
    </Provider>
  )
}
