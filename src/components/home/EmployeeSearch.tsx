import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { MdSearch } from 'react-icons/md';

const EmployeeSearch = ({text, setText}) => {
  return (
    <InputGroup>
      <FormControl
        aria-label="Search for an employee"
        alt="search bar"
        value={text}
        placeholder="Type at least two characters to pull up developers..."
        onChange={(e) => setText(e.target.value)}
        style={{ height: '100%' }}
      />
      <InputGroup.Append>
        <InputGroup.Text><MdSearch /></InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default EmployeeSearch;
