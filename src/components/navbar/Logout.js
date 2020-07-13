import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useGoogleLogout } from "react-google-login"

import { googleClientId } from "@globals/constants"
import { UserContext } from "@globals/contexts"
import { removeJwt } from "@globals/api"

export default function Logout() {
  const { setUsername, setUserEmail } = useContext(UserContext)
  const { signOut } = useGoogleLogout({
    clientId: googleClientId,
    onLogoutSuccess: () => {
      removeJwt()
      setUsername(null)
      setUserEmail(null)
      navigate("/login")
    },
  })

  return <Container onClick={signOut}>Sign Out</Container>
}

const Container = styled.div`
  cursor: pointer;
`
