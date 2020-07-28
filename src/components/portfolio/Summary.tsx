import React, { useContext } from 'react';
import styled from 'styled-components';
import { whiteContainer } from '@globals/styles';
import { ProfileContext } from '@globals/contexts';
import { profileSummaryList } from '@globals/constants';
import ProfilePic from './ProfilePic';
import InfoItem from './InfoItem';

export default function Summary() {
  const { employee } = useContext(ProfileContext);

  const info = profileSummaryList.map(({ label, data }) => (
    <InfoItem
      key={label}
      label={label}
      data={data}
      info={employee[data]}
    />
  ));

  return (
    <Container>
      <Title>PROFESSIONAL DETAILS</Title>
      <ProfilePic />
      <InfoContainer>
        {info}
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  ${whiteContainer};
  padding: 0;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
`;
