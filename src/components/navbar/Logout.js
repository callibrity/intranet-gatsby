import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../globals/UserContext";
import { useGoogleLogout } from "react-google-login";
import {googleClientId} from "../../globals/constants";

export default function Logout() {
  const { setUsername, setUserEmail } = useContext(UserContext);
  const {signOut} = useGoogleLogout({
    clientId:googleClientId,
    onLogoutSuccess:() => {
      setUsername(null);
      setUserEmail(null);
    }
  });

  return(
    <Container onClick={signOut}>Sign Out</Container>
  );
}

const Container = styled.div`

`;