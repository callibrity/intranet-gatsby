import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Img from 'gatsby-image';
import { Col } from 'react-bootstrap';
import { FixedImage } from '@globals/types';
import styled from 'styled-components';
import { openLockTestId, closedLockTestId } from '@globals/constants';
import { FaStar, FaRegStar } from 'react-icons/fa';

const { Title, Body, Text } = Card;

interface PropTypes {
  img: FixedImage,
  employeeName: string,
  employeeId: string,
  isLockedRow: boolean,
  lockToggle: Function
}

const EmployeeImage = ({
  img, employeeName, employeeId, isLockedRow, lockToggle,
}: PropTypes) => (
  <>
    <StyledCard
    >
      <StyledBody>
        <Title>
          {employeeName}

        </Title>
        <Img fixed={img} alt={`Image of ${employeeName}`} />
      </StyledBody>
      <Text className="text-center pb-0">
        {' '}

      </Text>
    </StyledCard>
  </>
);

export default EmployeeImage;

const StyledCard = styled(Card)`
max-width: 196px;
border-radius: 50px;
background: #ffffff;
box-shadow:  13px 13px 26px #d9d9d9, 
             -13px -13px 26px #ffffff;
`;

const StyledBody = styled(Body)`
  align-self: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  border-radius: 100;

`;
