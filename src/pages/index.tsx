import React, { useContext } from 'react';
import styled from 'styled-components';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';
import {graphql} from 'gatsby';
import { ImageQuery } from '@globals/types';
import Loading from '@home/Loading';

export default function Homepage({data} : ImageQuery ) {
  const { userRole } = useContext(UserContext);
  return (
    <Container>
      {userRole
        ?  <TimeTracker data={data} /> : <Loading />}
    </Container>
  );
}

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
