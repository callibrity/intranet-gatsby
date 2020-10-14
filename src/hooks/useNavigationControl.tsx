import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { developerRoute, accountManagerRoute, indexRoute, developerString, accountManagerString } from '@globals/constants';

const useNavigationControl = (pathname: string, userRole: string) => {
  useEffect(() => {
    if (userRole) {
      if (pathname.includes(accountManagerRoute) && userRole !== accountManagerString) {
        navigate(indexRoute);
      }
      else if (pathname.includes(developerRoute) && userRole !== developerString) {
        navigate(indexRoute)
      }
    }
  }, [pathname, userRole])
}

export default useNavigationControl;