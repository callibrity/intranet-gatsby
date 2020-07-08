import React from "react"
import { shallow } from "enzyme"
import TimeTracker from "@home/TimeTracker"

describe("TimeTracker component", () => {
  it("should render", () => {
    const wrapper = shallow(<TimeTracker />)

    expect(wrapper.exists()).toEqual(true)
  })
})