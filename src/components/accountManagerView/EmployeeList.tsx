import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import { EmployeeTypes, FixedImage } from '@globals/types';
import useLockList from '@hooks/useLockList';
import { getAllEmployeeMetrics } from '@api/serviceCalls';
import { pinnedCardsText, searchResultsText } from '@globals/constants';
import { createEmployeeElements } from './createEmployeeElements';

const { Header, Body } = Card;
const { Toggle, Collapse } = Accordion;

interface PropTypes {
  searchString: string,
  images: FixedImage[],
  showAll: boolean,
}

const EmployeeList = ({ searchString, images, showAll }: PropTypes) => {
  const [employeeDataList, setEmployeeDataList] = useState<EmployeeTypes>([]);
  const [toggleHide, setToggleHide] = useState(false);

  const { lockList, lockToggle } = useLockList('employeeLockList');
  const { lockedElements, searchElements } = createEmployeeElements(employeeDataList, lockList, lockToggle, searchString, images, showAll);

  useEffect(() => {
    getAllEmployeeMetrics(setEmployeeDataList);
  }, [])


  function toggleAccordion() {
    setToggleHide(!toggleHide);
  }

  return (
    <>
      {
        lockList.length ?
          <>
            <Accordion defaultActiveKey="0">
              <Card border="light">
                <Header>
                  <Toggle as={Button} onClick={toggleAccordion} data-testid="toggle-button" variant="dark" eventKey="0">
                    {pinnedCardsText} &nbsp; {toggleHide == true ? <BsChevronDoubleDown /> : <BsChevronDoubleUp />}
                  </Toggle>
                </Header>
                <Collapse eventKey="0" data-testid={'accordion'}>
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
            <SeparateFavorites role="separator" className="align-self-center" />
          </>
          : null
      }
      <Container fluid className="justify-content-md-center">
        {searchElements.length ?
          <Row><h3>{searchResultsText}</h3></Row>
          : null
        }
        <Row xs={1} sm={1} md={1} lg={1} xl={2} className="justify-content-md-center">
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
