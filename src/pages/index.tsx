import React, { useContext, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import { navigate } from 'gatsby';

const DeveloperFlag = false;

const AccountManagerFlag = false;

const Index = () => {
  const { userRole } = useContext(UserContext);

  useEffect(() => {
    if (AccountManagerFlag) {
      navigate('/account-manager-view')
    }
    else if (DeveloperFlag) {
      navigate('/developer-view')
    }
    else if (userRole === 'Account Manager') {
      navigate('/account-manager-view');
    }
    else if (userRole === 'Developer') {
      navigate('/developer-view');
    }
  }, [userRole])

  return (
    <div />
  );
}

export default Index;