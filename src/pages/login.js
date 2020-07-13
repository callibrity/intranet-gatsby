import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { useGoogleLogin } from "react-google-login"

import { UserContext } from "@globals/contexts"
import { googleClientId } from "@globals/constants"
import { flexCenter, standardButton } from "@globals/styles"
import { setJwt } from "@globals/api"

export default function Login() {
  const { setUsername, setUserEmail } = useContext(UserContext)
  const { signIn } = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: obj => {
      setJwt(obj.tokenId)
      setUsername(obj.profileObj.name)
      setUserEmail(obj.profileObj.email)
      navigate("/")
    },
    isSignedIn: true,
  })

  return (
    <Container>
      <Welcome>Welcome to Callibrity!</Welcome>
      <SignIn onClick={signIn}>Sign In</SignIn>
    </Container>
  )
}

const Container = styled.div`
  ${flexCenter}
  padding: 20px;
  text-align: center;
  flex-direction: column;
`

const Welcome = styled.h2`
  margin-bottom: 30px;
`

const SignIn = styled.button`
  ${standardButton}
`
