import {useState, useEffect} from "react";
import API from "../globals/api";

import {apiInitialMessage, apiErrorMessage} from "../globals/constants";

export default function useAPI(apiString){
  const [apiResult, setApiResult] = useState(apiInitialMessage);

  useEffect(() => {
    API.get(apiString)
      .then((res) => {
        setApiResult(res.data);
      })
      .catch((err) => {
        setApiResult(apiErrorMessage);
      });
  }, [apiString]);

  return apiResult;
}