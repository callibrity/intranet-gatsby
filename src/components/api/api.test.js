import axios from "axios"
import { setJwt, removeJwt } from "@components/api/api"

describe("Api Test", () => {
  it("should store Jwt in instance", () => {
    const expected = "Bearer hi"
    setJwt("hi")

    const actual = axios.defaults.headers.common["Authorization"]
    expect(actual).toEqual(expected)
  })

  it("should remove the Jwt in instance", () => {
    const expected = ""
    setJwt("hi")
    removeJwt()

    const actual = axios.defaults.headers.common["Authorization"]
    expect(actual).toEqual(expected)
  })
})
