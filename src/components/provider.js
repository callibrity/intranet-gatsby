import React, { useState } from 'react'

import { UserContext } from '../../globals/UserContext'

const Provider = ({children}) => {
  const [username, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider value={{username, setUsername, userEmail, setUserEmail}}>
      {children}
    </UserContext.Provider>
  )
}

export default({children}) => (
  <Provider>
    {children}
  </Provider>
)