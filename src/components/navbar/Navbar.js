import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <Container>
      <Link to="/">
        <Logo src="callibrity-logo.webp" alt="Callibrity Logo" />
      </Link>
      <SearchBar />
      <NavLinks />
    </Container>
  );
}

const Container = styled.div`
  color: white;
  background-color: ${({ theme: { darkerBlue } }) => darkerBlue};
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 132px;
`;
