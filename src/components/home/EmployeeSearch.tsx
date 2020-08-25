import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { IconContext } from 'react-icons';
import { MdSearch } from 'react-icons/md';

const EmployeeSearch = (props) => (
  <InputGroup>
    <IconContext.Provider value={{ color: 'grey' }}>
      <FormControl
        aria-label="Type at least two characters to pull up developers"
        alt="search bar"
        value={props.text}
        placeholder="Type at least two characters to pull up developers..."
        onChange={(e) => props.setText(e.target.value)}
        style={{ height: '100%', borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }}
      />
      <InputGroup.Append>
        <InputGroup.Text style={{ backgroundColor: 'white', borderBottomRightRadius: 100, borderTopRightRadius: 100 }}><MdSearch /></InputGroup.Text>
      </InputGroup.Append>
    </IconContext.Provider>
  </InputGroup>
);

export default EmployeeSearch;
