import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiInitialMessage, apiErrorMessage } from '@globals/constants';

export default function useAPI(apiString) {
  const [apiResult, setApiResult] = useState(apiInitialMessage);

  useEffect(() => {
    axios.get(apiString)
      .then((res) => {
        setApiResult(res.data);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setApiResult(apiErrorMessage);
      });
  }, [apiString]);

  return apiResult;
}
