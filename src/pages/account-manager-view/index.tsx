import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { ImageQuery } from '@globals/types';
import { graphql } from 'gatsby';
import EmployeeSearch from '@components/accountManagerView/EmployeeSearch';

import EmployeeList from '@components/accountManagerView/EmployeeList';

const AccountManagerView = ({ data }: ImageQuery) => {
  const [searchString, setSearchString] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

  const showAllClick = () => setShowAll(true);

  return (
    <Container fluid style={{ marginBottom: 16 }}>
      <EmployeeSearch
        text={searchString}
        setText={setSearchString}
        showAll={showAll}
        setShowAll={setShowAll} />
      <Button data-testid="show-all-button" variant="dark" onClick={showAllClick}>Show All</Button>

      <EmployeeList
        searchString={searchString}
        images={images}
        showAll={showAll}
      />
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
