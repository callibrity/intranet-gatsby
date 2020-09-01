import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
const { Append, Text } = InputGroup;

export default function SearchBar() {
  const [text, setText] = useState('');

  return (
    <InputGroup >
      <FormControl
        aria-label="General Site Search"
        alt="search bar"
        value={text}
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
        style={{ height: '100%' }}
      />
      <Append>
        <Text>
          <MdSearch />
        </Text>
      </Append>
    </InputGroup>
  )
}