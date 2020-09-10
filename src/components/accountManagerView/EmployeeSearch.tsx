import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { IconContext } from 'react-icons';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import { searchBarAltText, searchBarPlaceholder } from '@globals/constants';

const { Append, Text } = InputGroup;

interface EmployeeSearchProps {
  text: string;
  setText: any;
}

const EmployeeSearch = ({ text, setText }: EmployeeSearchProps) => (
  <InputGroup>
    <IconContext.Provider value={{ color: 'grey' }}>
      <FormControl
        aria-label={searchBarPlaceholder}
        alt={searchBarAltText}
        value={text}
        placeholder={searchBarPlaceholder}
        onChange={(e) => setText(e.target.value)}
        style={{ height: '100%', borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }}
      />
      <Append>
        <StyledText>
          <MdSearch />
        </StyledText>
      </Append>
    </IconContext.Provider>
  </InputGroup>
);

export default EmployeeSearch;

const StyledText = styled(Text)`
  background-color: white;
  border-bottom-right-radius: 100;
  border-top-right-radius: 100;
`;