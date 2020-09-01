import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllEmployeeMetrics } from '@api/serviceCalls';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import EmployeeSearch from '@home/EmployeeSearch';
import { EmployeeMetricTypes, ImageQuery } from '@globals/types';
import EmployeeCardRow from '@home/EmployeeCardRow';
import { reactChildren } from '@globals/types';
import { graphql } from 'gatsby';
import useLockList from '@hooks/useLockList';

type EmployeeTypes = (EmployeeMetricTypes & { employeeName: string, employeeId: string })[];

const AccountManagerView = ({ data }: ImageQuery) => {
  const [employeeDataList, setEmployeeDataList] = useState<EmployeeTypes>([]);
  const [searchString, setSearchString] = useState<string>('');
  const { lockList, lockToggle } = useLockList('employeeLockList');

  useEffect(() => {
    getAllEmployeeMetrics(setEmployeeDataList, console.log);
  })

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

  const lockedElements: reactChildren = [];
  const searchElements: reactChildren = [];

  employeeDataList.forEach((developer) => {
    const { billable, growth, updatedAt, employeeId, employeeName } = developer;
    const isLocked = lockList.includes(employeeId);
    const isSearched = searchString.length > 1 && employeeName.toLowerCase().includes(searchString.toLowerCase());
    if (isLocked || isSearched) {
      const img = images.find((image) => image.originalName === `${employeeId}.jpg`) || data.mugPlaceholder.childImageSharp.fixed;
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
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch text={searchString} setText={setSearchString} />
      </Container>
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
`

const SeparateFavorites = styled.div`
  display: block;
  border-top: 3px solid black;
  margin: 1em 0;
`;

