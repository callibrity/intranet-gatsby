import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllEmployeeMetrics } from '@api/serviceCalls';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { EmployeeMetricTypes, ImageQuery, reactChildren } from '@globals/types';
import EmployeeCardRow from '@home/EmployeeCardRow';

import { graphql } from 'gatsby';
import EmployeeSearch from '../../components/home/EmployeeSearch';

type EmployeeTypes = (EmployeeMetricTypes & { employeeName: string, employeeId: string })[];

const AccountManagerView = ({ data }: ImageQuery) => {
  const [employeeDataList, setEmployeeDataList] = useState<EmployeeTypes>([]);
  const [searchString, setSearchString] = useState<string>('');
  const [lockList, setLockList] = useState<string[]>([]);

  useEffect(() => {
    getAllEmployeeMetrics(setEmployeeDataList, console.log);
    const storedNames = JSON.parse(window.localStorage.getItem('localLockList'));
    if (storedNames !== null) {
      setLockList(storedNames);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('localLockList', JSON.stringify(lockList));
  }, [lockList]);

  const lockToggle = (employeeId: string) => {
    if (lockList.includes(employeeId)) {
      setLockList(lockList.filter((favoriteId) => favoriteId !== employeeId));
    } else {
      setLockList([...lockList, employeeId]);
    }
  };

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

  const lockedElements: reactChildren = [];
  const searchElements: reactChildren = [];

  employeeDataList.forEach((developer) => {
    const {
      billable, growth, updatedAt, employeeId, employeeName,
    } = developer;
    const isLocked = lockList.includes(employeeId);
    const isSearched = searchString.length > 1 && employeeName.toLowerCase().includes(searchString.toLowerCase());
    if (isLocked || isSearched) {
      const img = images.find((image) => image.originalName === `${employeeId}.jpg`) || data.mugPlaceholder.childImageSharp.fixed;
      const EmployeeElement = (
        <EmployeeCardRow
          key={employeeId}
          employeeMetrics={{ billable, growth, updatedAt }}
          employeeId={employeeId}
          employeeName={employeeName}
          isLockedRow={isLocked}
          lockToggle={lockToggle}
          img={img}
        />
      );
      if (isLocked) {
        lockedElements.push(EmployeeElement);
      } else {
        searchElements.push(EmployeeElement);
      }
    }
  });

  return (
    <Container fluid style={{}}>
      <Row>
        <Col>
      <Accordion defaultActiveKey="0">
        <EmployeeSearch text={searchString} setText={setSearchString} />
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
      {searchElements}
      </Col>
      </Row>
    </Container>
  );
};

export default AccountManagerView;

export const query = graphql`
  {
    mugs: allFile(filter: {relativeDirectory: {eq: "mug"}}) {
      nodes {
        childImageSharp {
          fixed (width: 133) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
    mugPlaceholder: file(base: {eq: "mug-placeholder.png"}) {
      childImageSharp {
        fixed (width: 133) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
  }
`;
