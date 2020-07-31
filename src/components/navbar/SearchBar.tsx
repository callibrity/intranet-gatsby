import React, { useState, useContext, ChangeEvent } from 'react';
import { MdSearch } from 'react-icons/md';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';
import { UserContext } from '@globals/contexts';

export default function SearchBar() {
  const [text, setText] = useState('');
  const { username } = useContext(UserContext);

  return !username ? null : (
  <InputGroup >
      <FormControl aria-label="General Site Search"
        alt="search bar"
        value={text}
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
    <InputGroup.Append>
      <InputGroup.Text><MdSearch/></InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  );
}
