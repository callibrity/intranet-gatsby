import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "components/GlobalStyle"
import { UserContext } from "globals/UserContext" 
import theme from "globals/theme" 
import Navbar from "navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Authentication from "./Authentication"

const UserContextProvider = function({children}) {
  const [username, setUsername] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  return(
    <UserContext.Provider value={{username, setUsername, userEmail, setUserEmail}}>
      {children}
    </UserContext.Provider>
  )
}
  
export default function GlobalProvider ({element}) {
  
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Authentication />
        {element}
      </ThemeProvider>
    </UserContextProvider>
  )
}
