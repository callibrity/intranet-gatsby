import React, {useContext} from 'react';
import { UserContext } from '@globals/contexts';
import { ImageQuery } from '@globals/types';
import IndividualView from './IndividualView';
import AccountManagerView from './AccountManagerView';

const TimeTracker = ({data} : ImageQuery) => {
  const { userRole } = useContext(UserContext);
  return (userRole === 'Account Manager'
    ? <AccountManagerView data={data} />
    : <IndividualView />
  )
};

export default TimeTracker;