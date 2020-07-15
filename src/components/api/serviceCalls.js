import axios from "axios"
import { getEmployeeResource } from "@components/api/endpoints"

export const getEmployeeMetrics = async (onSucess, onError) => {
  await axios
    .get(getEmployeeResource)
    .then(res => {
      onSucess(res.data)
    })
    .catch(err => {
      onError(err.message)
    })
}
