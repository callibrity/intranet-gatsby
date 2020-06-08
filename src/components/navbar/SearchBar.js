import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { standardInput } from "../../globals/styles";
import { UserContext } from "../../globals/UserContext";

export default function SearchBar() {
  const [text, setText] = useState("");
  const { username } = useContext(UserContext);

  return (
    <Container username={username} >
      <IconContainer>
        <FaSearch />
      </IconContainer>
      <Search
        alt="search bar"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  ${standardInput}
  display: ${({username}) => username ? "flex" : "none"};  
  align-items: center;
  width: 40%;
  justify-content: left;
`;

const IconContainer = styled.div`
  color: lightgray;
`;

const Search = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
