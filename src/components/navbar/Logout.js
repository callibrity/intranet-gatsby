import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useGoogleLogout } from "react-google-login"

import { googleClientId } from "@constants"
import { UserContext } from "@contexts"

export default function Logout() {
  const { setUsername, setUserEmail } = useContext(UserContext)
  const {signOut} = useGoogleLogout({
    clientId:googleClientId,
    onLogoutSuccess:() => {
      setUsername(null) 
      setUserEmail(null)
      navigate("/login")
    }
  })

  return(
    <Container onClick={signOut}>Sign Out</Container>
  )
}

const Container = styled.div`
  cursor: pointer;
`