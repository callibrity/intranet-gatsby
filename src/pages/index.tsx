import React, { useContext, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import { developerRoute, accountManagerRoute, developerString, accountManagerString } from '@globals/constants';
import { navigate } from 'gatsby';

const Index = () => {
  const { userRole } = useContext(UserContext);

  useEffect(() => {
    if (userRole === accountManagerString) {
      navigate(accountManagerRoute);
    }
    else if (userRole === developerString) {
      navigate(developerRoute);
    }
  }, [userRole])

  return (
    <div />
  );
}

export default Index;