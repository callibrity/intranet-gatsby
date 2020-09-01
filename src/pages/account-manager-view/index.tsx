import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import EmployeeSearch from '@home/EmployeeSearch';
import { ImageQuery } from '@globals/types';

import { graphql } from 'gatsby';
import EmployeeList from '@home/EmployeeList';

const AccountManagerView = ({ data }: ImageQuery) => {
  const [searchString, setSearchString] = useState<string>('');

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

  return (
    <>
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch text={searchString} setText={setSearchString} />
      </Container>
      <EmployeeList
        searchString={searchString}
        images={images}
      />
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
