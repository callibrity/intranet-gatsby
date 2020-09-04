import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Img from 'gatsby-image';
import { FixedImage } from '@globals/types';
import { MdLock, MdLockOpen } from 'react-icons/md';
import styled from 'styled-components';
import { openLockTestId, closedLockTestId } from '@globals/constants';

const { Title, Body, Text } = Card;

interface PropTypes {
  img: FixedImage,
  employeeName: string,
  employeeId: string,
  isLockedRow: boolean,
  lockToggle: Function
}

const EmployeeImage = ({ img, employeeName, employeeId, isLockedRow, lockToggle }: PropTypes) => {
  return (
    <StyledCard className="mx-2 shadow-sm">
      <StyledBody>
        <Title>
          {employeeName}
        </Title>
        <Img fixed={img} alt={`Image of ${employeeName}`} />
      </StyledBody>
      <Text className="text-center pb-0">
        {' '}
        <StyledButton
          id={employeeId}
          variant="dark"
          onClick={() => lockToggle(employeeId)}
        >
          {isLockedRow ? 
            <MdLock aria-label={`${employeeName}-locked`} data-testid={closedLockTestId} /> : 
            <MdLockOpen aria-label={`${employeeName}-unlocked`} data-testid={openLockTestId} />}
        </StyledButton>
      </Text>
    </StyledCard>
  )
}

export default EmployeeImage;

const StyledCard = styled(Card)`
  width: 14rem;
`

const StyledBody = styled(Body)`
  align-self: center;
  justify-content: center;
`

const StyledButton = styled(Button)`
  border-top-left-radius: 100;
  border-top-right-radius: 100;
`