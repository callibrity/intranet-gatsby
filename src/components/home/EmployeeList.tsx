import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { EmployeeMetricTypes } from '@globals/types';
import EmployeeCardRow from '@home/EmployeeCardRow';
import { reactChildren, FixedImage } from '@globals/types';
import useLockList from '@hooks/useLockList';
import { getAllEmployeeMetrics } from '@api/serviceCalls';

type EmployeeTypes = (EmployeeMetricTypes & { employeeName: string, employeeId: string })[];

interface PropTypes {
  searchString: string,
  images: FixedImage[],
}

const AccountManagerView = ({ searchString, images }: PropTypes) => {
  const [employeeDataList, setEmployeeDataList] = useState<EmployeeTypes>([]);
  const { lockList, lockToggle } = useLockList('employeeLockList');
  const lockedElements: reactChildren = [];
  const searchElements: reactChildren = [];

  useEffect(() => {
    getAllEmployeeMetrics(setEmployeeDataList, console.log);
  })

  const placeholderImage = images.find((image) => image.originalName === 'mug-placeholder.png')

  employeeDataList.forEach((developer) => {
    const { billable, growth, updatedAt, employeeId, employeeName } = developer;
    const isLocked = lockList.includes(employeeId);
    const isSearched = searchString.length > 1 && employeeName.toLowerCase().includes(searchString.toLowerCase());
    if (isLocked || isSearched) {
      const img = images.find((image) => image.originalName === `${employeeId}.jpg`) || placeholderImage;
      const EmployeeElement =
        <EmployeeCardRow
          key={employeeId}
          employeeMetrics={{ billable, growth, updatedAt }}
          employeeId={employeeId}
          employeeName={employeeName}
          isLockedRow={isLocked}
          lockToggle={lockToggle}
          img={img}
        />
      if (isLocked) {
        lockedElements.push(EmployeeElement);
      } else {
        searchElements.push(EmployeeElement);
      }
    }
  })

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card border="light">
          <Card.Header className="text-right">
            <Accordion.Toggle as={Button} variant="dark" eventKey="0">
              Hide Locked Cards
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{lockedElements}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <SeparateFavorites />
      {searchElements}
    </>
  );
};

export default AccountManagerView;

const SeparateFavorites = styled.div`
  display: block;
  border-top: 3px solid black;
  margin: 1em 0;
`;

