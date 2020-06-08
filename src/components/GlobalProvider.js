import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "components/GlobalStyle"
import { UserContext } from "globals/UserContext" 
import theme from "globals/theme" 

const UserContextProvider = function({children}) {
  const [username, setUsername] = useState("test")
  const [userEmail, setUserEmail] = useState("test")
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
        {element}
      </ThemeProvider>
    </UserContextProvider>
  )
}
