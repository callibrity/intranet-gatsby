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
    <StyledCard className="mx-2 shadow-sm" style={{boxShadow:border-radius: 50px;
19px 19px 38px #d9d9d9, 
                   -19px -19px 38px #ffffff; maxWidth: '190px', minWidth: '190px', borderRadius: 30, boxShadow: 15}}>
    <StyledBody>
      <Title>
        {employeeName}
      </Title>
      <Img fixed={img} alt={`Image of ${employeeName}`} />
    </StyledBody>
    <Text className="text-center pb-0">
      {' '}
      <div
        id={employeeId}
        onClick={() => lockToggle(employeeId)}
      >
        {isLockedRow ? <FaStar /> : <FaRegStar />}
      </div>
    </Text>
  </StyledCard>
);

export default EmployeeImage;

const StyledCard = styled(Card)`
border-top-left-radius: 100;
border-bottom-left-radius: 100;
`;

const StyledBody = styled(Body)`
  align-self: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  border-top-left-radius: 100;
  border-top-right-radius: 100;
`;
