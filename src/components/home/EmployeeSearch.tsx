import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { MdSearch } from 'react-icons/md';

const EmployeeSearch = () => {
  const [text, setText] = useState<string>('');
  return (
    <InputGroup>
      <FormControl
        aria-label="Search for an employee"
        alt="search bar"
        value={text}
        placeholder="Search employees..."
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
