import React from 'react';
import Card from 'react-bootstrap/Card';
const { Title, Body, Text } = Card;
import Button from 'react-bootstrap/Button';
import Img from 'gatsby-image';
import { FixedImage } from '@globals/types';
import { MdLock, MdLockOpen } from 'react-icons/md';

interface PropTypes {
  img: FixedImage,
  employeeName: string,
  employeeId: string,
  isLockedRow: boolean,
  lockToggle: Function
}

const EmployeeImage = ({ img, employeeName, employeeId, isLockedRow, lockToggle }: PropTypes) => {
  return (
    <Card className="mx-2 shadow-sm" style={{ width: '14rem' }}>
      <Body style={{ alignSelf: 'center', justifyContent: 'center' }}>
        <Title>
          {employeeName}
        </Title>
        <Img fixed={img} />
      </Body>
      <Text className="text-center pb-0">
        {' '}
        <Button id={employeeId} variant="dark" style={{ borderTopLeftRadius: 100, borderTopRightRadius: 100 }} onClick={() => lockToggle(employeeId)}>{isLockedRow ? <MdLock /> : <MdLockOpen />}</Button>
      </Text>
    </Card>
  )
}

export default EmployeeImage;