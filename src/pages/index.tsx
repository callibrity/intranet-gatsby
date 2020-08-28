import React, { useContext, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import { navigate } from 'gatsby';

const DeveloperFlag = false;

const AccountManagerFlag = false;

export default function Homepage() {
  const { userRole } = useContext(UserContext);

  useEffect(() => {
    if (AccountManagerFlag) {
      navigate('/am-view')
    }
    else if (DeveloperFlag) {
      navigate('/dev-view')
    }
    else if (userRole === 'Account Manager') {
      navigate('/am-view');
    }
    else if (userRole === 'Developer') {
      navigate('/dev-view');
    }
  }, [userRole])

  return (
    <div />
  );
}

