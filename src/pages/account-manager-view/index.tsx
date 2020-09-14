import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ImageQuery } from '@globals/types';
import { graphql } from 'gatsby';
import EmployeeSearch from '@components/accountManagerView/EmployeeSearch';

import EmployeeList from '@components/accountManagerView/EmployeeList';

const AccountManagerView = ({ data }: ImageQuery) => {
  const [searchString, setSearchString] = useState<string>('');

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

  return (
    <Container fluid style={{ marginBottom: 16 }}>
      <EmployeeSearch text={searchString} setText={setSearchString} />

      <EmployeeList
        searchString={searchString}
        images={images}
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
