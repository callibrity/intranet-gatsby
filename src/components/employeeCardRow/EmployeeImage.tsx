import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Img from 'gatsby-image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import { FixedImage } from '@globals/types';
import styled from 'styled-components';
import { openLockTestId, closedLockTestId } from '@globals/constants';
import { TiPinOutline, TiPin } from "react-icons/ti";

const { Title, Body, Text } = Card;

interface PropTypes {
  img: FixedImage,
  employeeName: string,
  employeeId: string,
  isLockedRow: boolean,
  lockToggle: Function
}

const EmployeeImage = ({
  img, employeeName, employeeId, isLockedRow, lockToggle
}: PropTypes) => (
  <>
    <StyledCard className="border-0">
      <StyledBody>
        <Title>
          <h3>
            {employeeName}
          </h3>
        </Title>
        <Container>
          <Row className="justify-content-md-center">
            <Img fixed={img} alt={`Image of ${employeeName}`} style={{}} />
          </Row>
        </Container>
      </StyledBody>
      <Text className="text-center pb-0">
        {' '}
        <StyledButton
          id={employeeId}
          variant="warning"
          onClick={() => lockToggle(employeeId)}
        >
          {isLockedRow ? 
          <TiPin aria-label={`${employeeName}-locked`} data-testid={closedLockTestId}  /> : 
          <TiPinOutline aria-label={`${employeeName}-unlocked`} data-testid={openLockTestId} />}
        </StyledButton>
      </Text>
    </StyledCard>
  </>
);

export default EmployeeImage;

const StyledCard = styled(Card)`
border-radius: 10px;
padding-left: 2px;
padding-right: 2px;
`;

const StyledBody = styled(Body)`
  align-self: center;
  align-content: center;
  justify-content: center;
  padding-bottom: 0;
`;

const StyledButton = styled(Button)`
margin-top: 16px;
margin-bottom: 16px;
border-radius: 100px;
`;
