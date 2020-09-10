import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { EmployeeTypes } from '@globals/types';
import { FixedImage } from '@globals/types';
import useLockList from '@hooks/useLockList';
import { getAllEmployeeMetrics } from '@api/serviceCalls';
import { hideLockedCardsButtonText } from '@globals/constants';
import { createEmployeeElements } from './createEmployeeElements';
const { Header, Body } = Card;
const { Toggle, Collapse } = Accordion;

interface PropTypes {
  searchString: string,
  images: FixedImage[],
}

const EmployeeList = ({ searchString, images }: PropTypes) => {
  const [employeeDataList, setEmployeeDataList] = useState<EmployeeTypes>([]);
  const { lockList, lockToggle } = useLockList('employeeLockList');

  useEffect(() => {
    getAllEmployeeMetrics(setEmployeeDataList, console.log);
  }, [])

  const { lockedElements, searchElements } = createEmployeeElements(employeeDataList, lockList, lockToggle, searchString, images)

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card border="light">
          <Header className="text-right">
            <Toggle as={Button} variant="dark" eventKey="0">
              {hideLockedCardsButtonText}
            </Toggle>
          </Header>
          <Collapse eventKey="0" data-testid={'accordion'}>
            <Body>
              {lockedElements}
            </Body>
          </Collapse>
        </Card>
      </Accordion>
      <SeparateFavorites role="separator" />
      {searchElements}
    </>
  );
};

export default EmployeeList;

const SeparateFavorites = styled.div`
  display: block;
  border-top: 3px solid black;
  margin: 1em 0;
`;

