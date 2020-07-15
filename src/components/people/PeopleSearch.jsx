import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const PeopleSearch = ({ name, setName }) => (
  <OuterContainer>
    <Container>
      <StyledFaSearch />
      <Search
        type="search"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Container>
  </OuterContainer>
);

PeopleSearch.defaultProps = {
  name: '',
};

PeopleSearch.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func.isRequired,
};
export default PeopleSearch;

const OuterContainer = styled.div`
  padding-left: 10px;
`;

const Container = styled.div`
  display: inline-block;
  padding: 3px;
  border: 1px solid black;
  border-color: rgba(0,0,0,0.55) rgba(0,0,0,0.35) rgba(0,0,0,0.2);
  border-top-width: 2px;
  color: black;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;

  :focus {
    outline: none;
    box-shadow: inset 0 1px 0 rgba(0,0,0,0.1), 0 0 0 2px ${({ theme: { blue } }) => blue};
  }
`;

export const StyledFaSearch = styled(FaSearch)`
  color: lightgray;
`;

export const Search = styled.input`
  border: none;
  outline: none;
`;
