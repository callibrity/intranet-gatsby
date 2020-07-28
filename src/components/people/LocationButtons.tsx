import React, {Dispatch, SetStateAction} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { blue, darkerBlue } from '@globals/theme';
import { standardButton } from '@globals/styles';
import { peopleLocationButtonList } from '@globals/constants'; 

interface propInterface {
  location: string,
  setLocation: Dispatch<SetStateAction<string>>,
}

const LocationButtons = ({ location, setLocation }: propInterface) => {  
  const list = peopleLocationButtonList.map(({ label, value }) => (
    <ButtonFilter key={label} value={value} location={location} onClick={() => setLocation(value)}>
      {label}
    </ButtonFilter>
  ));

  return (
    <Container>
      {list}
    </Container>
  );
};

export default LocationButtons;

LocationButtons.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,

};

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const ButtonFilter = styled.div<any>`
  ${standardButton};
  background-color: ${({ location, value }) => (location === value ? blue : darkerBlue)};
  font-size: 16px;
  padding: 3px 5px;
  margin-right: 20px;
`;
