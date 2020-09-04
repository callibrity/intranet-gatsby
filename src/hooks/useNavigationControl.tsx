import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { developerRoute, accountManagerRoute, indexRoute, developerString, accountManagerString } from '@globals/constants';
import { accountManagerFlag, developerFlag } from '@globals/flags';

const useNavigationControl = (pathname: string, userRole: string) => {
  useEffect(() => {
    if (userRole) {
      if (pathname.includes(accountManagerRoute) && userRole !== accountManagerString && !accountManagerFlag) {
        navigate(indexRoute);
      }
      else if (pathname.includes(developerRoute) && userRole !== developerString && !developerFlag) {
        navigate(indexRoute)
      }
    }
  }, [pathname, userRole])
}

export default useNavigationControl;