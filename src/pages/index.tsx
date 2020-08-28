import React, { useContext, useEffect } from 'react';
import { UserContext } from '@globals/contexts';
import { navigate } from 'gatsby';

const DevFlag = false;

const AMFlag = false;

export default function Homepage() {
  const { userRole } = useContext(UserContext);

  useEffect(() => {
    if (AMFlag) {
      navigate('/am-view')
    }
    else if (DevFlag) {
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

