import React from "react"
import { shallow } from "enzyme"
import TimeTracker, {
  LineItem,
  BillableHours,
  GrowthHours,
} from "@home/TimeTracker"
import Section from "@home/Section"

describe("TimeTracker component", () => {
  it("should render TimeTracker", () => {
    const wrapper = shallow(<TimeTracker />)

    expect(wrapper.find(BillableHours).exists()).toEqual(true)
    expect(wrapper.find(GrowthHours).exists()).toEqual(true)
  })

  it("should render Billable Hours", () => {
    const props = {
      currentHours: 1,
      currentTarget: 2,
      totalTarget: 3,
    }
    const wrapper = shallow(<BillableHours {...props} />)
    const lineItems = wrapper.find(LineItem)

    expect(wrapper.find(Section).prop("label")).toEqual("Target Hours")
    expect(lineItems.at(0).prop("label")).toEqual("Current Hours")
    expect(lineItems.at(0).prop("value")).toEqual(1)
    expect(lineItems.at(1).prop("label")).toEqual("Current Target")
    expect(lineItems.at(1).prop("value")).toEqual(2)
    expect(lineItems.at(2).prop("label")).toEqual("Total Target")
    expect(lineItems.at(2).prop("value")).toEqual(3)
  })

  it("should render Growth Hours", () => {
    const props = {
      hoursUsed: 1,
      hoursRemaining: 2,
      totalGrowth: 3,
    }
    const wrapper = shallow(<GrowthHours {...props} />)
    const lineItems = wrapper.find(LineItem)

    expect(wrapper.find(Section).prop("label")).toEqual("Growth Time")
    expect(lineItems.at(0).prop("label")).toEqual("Hours Used")
    expect(lineItems.at(0).prop("value")).toEqual(1)
    expect(lineItems.at(1).prop("label")).toEqual("Hours Remaining")
    expect(lineItems.at(1).prop("value")).toEqual(2)
    expect(lineItems.at(2).prop("label")).toEqual("Total Growth")
    expect(lineItems.at(2).prop("value")).toEqual(3)
  })

  it("should render LineItem", () => {
    const props = {
      label: "label",
      value: 1,
    }
    const wrapper = shallow(<LineItem {...props} />)
    const spans = wrapper.find("span")

    expect(spans.at(0).text()).toEqual("label:")
    expect(spans.at(1).text()).toEqual("1")
  })

  it("should not break with invalid data", () => {
    const growthHours = shallow(<GrowthHours />)
    const billableHours = shallow(<BillableHours />)
    const lineItem = shallow(<LineItem />)

    expect(growthHours.exists()).toEqual(true)
    expect(billableHours.exists()).toEqual(true)
    expect(lineItem.exists()).toEqual(true)
  })
})
