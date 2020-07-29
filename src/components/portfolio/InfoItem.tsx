import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ProfileContext } from '@globals/contexts';

interface propTypes {
  label: string,
  info: never,
  data: string | any[]
}

export default function InfoItem({ label = '', data = '', info = '' } : propTypes) {
  const { editMode, setEmployee } = useContext(ProfileContext);
  const text = typeof info === 'string' || info === undefined ? info
    : info.reduce((str, ele) => `${str}, ${ele}`);

  function handleChange(e) {
    const { value, name } = e.target;
    const load = {};
    load[name] = value;
    setEmployee({ type: 'update', load });
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Data
        value={text}
        disabled={!editMode}
        name={data}
        onChange={handleChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 5px;
`;

const Label = styled.div`
  font-weight: 700;
`;

const Data = styled.input`
  word-wrap: break-word;
  word-break: break-word;
  border: 0px solid;
  background-color: white;
  color: black;
`;
