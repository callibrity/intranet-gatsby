import React, { useContext, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import { navigate } from 'gatsby';
import { accountManagerFlag, developerFlag } from '@globals/flags';

const Index = () => {
  const { userRole } = useContext(UserContext);

  useEffect(() => {
    if (accountManagerFlag) {
      navigate('/account-manager-view')
    }
    else if (developerFlag) {
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