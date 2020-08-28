import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllEmployeeMetrics } from '@api/serviceCalls';
import { Container } from 'react-bootstrap';
import EmployeeSearch from '../../components/home/EmployeeSearch';
import { UserMetricTypes, ImageQuery } from '@globals/types';
import EmployeeCardRow from '@home/EmployeeCardRow';
import { reactChildren } from '@globals/types';
import { graphql } from 'gatsby';


type EmployeeTypes = (UserMetricTypes & { employeeName: string, employeeId: string })[];

const AccountManagerView = ({ data }: ImageQuery) => {
  const [userData, setUserData] = useState<EmployeeTypes>([]);
  const [searchString, setSearchString] = useState('');
  const [favoritesList, setFavoritesList] = useState([]);

  const images = data.mugs.nodes.map((node) => node.childImageSharp.fixed);

  useEffect(() => {
    getAllEmployeeMetrics(setUserData, console.log);
  }, []);

  useEffect(() => {
    var storedNames = JSON.parse(window.localStorage.getItem("localKeepList"));
    setFavoritesList(storedNames);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("localKeepList", JSON.stringify(favoritesList));
  }, [favoritesList]);

  const isLocked = (employeeId: string): boolean => favoritesList.includes(employeeId);

  const favoriteListToggleHandler = (employeeId: string) => {
    if (isLocked(employeeId)) {
      setFavoritesList(favoritesList.filter((favoriteId) => favoriteId !== employeeId));
    } else {
      setFavoritesList([...favoritesList, employeeId]);
    }
  };

  const favoriteList: reactChildren = [];
  const notFavoriteList: reactChildren = [];

  userData.forEach((developer) => {
    const { billable, growth, updatedAt, employeeId, employeeName } = developer;
    const isFavorite = isLocked(employeeId);
    const show = searchString.length > 1 && employeeName.toLowerCase().includes(searchString.toLowerCase());
    if (isFavorite || show) {
      const img = images.find((image) => image.originalName === `${employeeId}.jpg`) || data.mugPlaceholder.childImageSharp.fixed;
      const UserComponent =
        <EmployeeCardRow
          key={employeeId}
          userMetrics={{ billable, growth, updatedAt }}
          employeeId={employeeId}
          employeeName={employeeName}
          isLockedRow={isFavorite}
          lockToggle={favoriteListToggleHandler}
          img={img}
        />
      if (isFavorite) {
        favoriteList.push(UserComponent);
      } else {
        notFavoriteList.push(UserComponent);
      }
    }
  })

  return (
    <>
      <Container style={{ marginBottom: 16 }}>
        <EmployeeSearch text={searchString} setText={setSearchString} />
      </Container>
      {favoriteList}
      <SeparateFavorites />
      {notFavoriteList}
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

