import {useState, useEffect} from "react"
import API from "@api"

import {apiInitialMessage, apiErrorMessage} from "@constants"

export default function useAPI(apiString){
  const [apiResult, setApiResult] = useState(apiInitialMessage)

  useEffect(() => {
    API.get(apiString) 
      .then((res) => {
        setApiResult(res.data)
      })
      .catch((err) => {
        setApiResult(apiErrorMessage)
      })
  }, [apiString])

  return apiResult
}