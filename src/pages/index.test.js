import React from "react"
import { shallow } from "enzyme"
import TimeTracker from "@home/TimeTracker"
import Calendar from "@home/Calendar"
import Home from "."

describe("Home page", () => {
  it("should render TimeTracker", () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.find(TimeTracker).exists()).toEqual(true)
  })

  it("should render Calendar", () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.find(Calendar).exists()).toEqual(true)
  })
})
