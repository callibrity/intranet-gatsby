import React from "react"
import API, { setJwt, removeJwt } from "@globals/api"

describe("Api Test", () => {
  it("should store Jwt in instance", () => {
    const expected = "Bearer hi"
    setJwt("hi")

    const actual = API.defaults.headers.common["Authorization"]
    expect(actual).toEqual(expected)
  })

  it("should remove the Jwt in instance", () => {
    const expected = ""
    setJwt("hi")
    removeJwt()

    const actual = API.defaults.headers.common["Authorization"]
    expect(actual).toEqual(expected)
  })
})
