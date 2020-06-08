import React, {useContext} from "react"
import styled from "styled-components"

import { UserContext } from "globals/UserContext" 

const HomePage = () => {
  const { username } = useContext(UserContext)
  return (
    <Container>{username}</Container>
  )
}

const Container = styled.a`
    display: flex;
    flex-direction: column;
    margin: 50px;
    background-color: ${props => props.theme.blue};
`
export default HomePage