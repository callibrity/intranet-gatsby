import React, { useReducer, useEffect, useState } from 'react';
import { parse } from 'query-string';
import styled from 'styled-components';
import Summary from '@portfolio/Summary';
import Details from '@portfolio/Details';
import Header from '@portfolio/Header';
import {
  apiInitialMessage,
  apiErrorMessage,
  employeesAPINameString,
} from '@globals/constants';
import { ProfileContext } from '@globals/contexts';
import axios from 'axios';

type stateType = {name: string, email: string} | string;

function reducer(state: stateType, action: {type: string, load: stateType }) : stateType {
  const { type, load } = action;
  if (type === 'initial') {
    return load;
  }
  if (type === 'update') {
    return {
      ...state,
      ...load,
    };
  }

  return { ...state };
}

export default function PortfolioPage() {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [employee, setEmployee] = useReducer<stateType>(reducer, apiInitialMessage);
  const { name } = parse(window.location.search);

  const profileInfo = {
    employee,
    setEmployee,
    editMode,
    setEditMode,
  };

  useEffect(() => {
    axios.get(`${employeesAPINameString}${name}`)
      .then((res) => {
        setEmployee({ type: 'initial', load: res.data[0] });
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setEmployee(apiErrorMessage);
      });
  }, [name, editMode]);

  return (
    <ProfileContext.Provider value={profileInfo}>
      <Container>
        <InnerContainer>
          <Header />
          <LowerContainer>
            <div>
              <Summary />
            </div>
            <div>
              <Details />
            </div>
          </LowerContainer>
        </InnerContainer>
      </Container>
    </ProfileContext.Provider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 16px;
`;

const InnerContainer = styled.div`
  max-width: 1000px;
`;

const LowerContainer = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: 1fr 2fr;
  padding: 20px 0;
`;
