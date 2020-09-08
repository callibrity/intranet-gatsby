import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { EmployeeTypes, FixedImage } from '@globals/types';

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
  }, []);

  const { lockedElements, searchElements } = createEmployeeElements(employeeDataList, lockList, lockToggle, searchString, images);

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card border="light">
          <Header className="text-right">
            <Toggle as={Button} variant="dark" eventKey="0">
              {hideLockedCardsButtonText}
            </Toggle>
          </Header>
          <Collapse eventKey="0">
            <Body>
              <Container fluid>
                <Row xs={1} sm={1} md={1} lg={1} xl={2} className="justify-content-md-center">
                  {lockedElements}
                </Row>
              </Container>
            </Body>
          </Collapse>
        </Card>
      </Accordion>
      <Container fluid className="justify-content-md-center">
      <SeparateFavorites className="align-self-center" />

        <Row lg={1} xl={2} className="justify-content-md-center">

          {searchElements}
        </Row>
      </Container>
    </>
  );
};

export default EmployeeList;

const SeparateFavorites = styled.div`
  display: block;
  max-width: 100%;
  border-top: 3px solid grey;
  margin: 1em 0;
`;
