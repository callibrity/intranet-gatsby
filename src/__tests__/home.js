import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/react/dont-cleanup-after-each"
import { render } from "@testing-library/react"
import Index from "@pages/index"
import useAPI from "@useAPI"

jest.mock("@useAPI")
function queryElements(app){
  return {
    newsSection: () => app.queryByText(/news/i),
    calendarSection: () => app.queryByText(/calendar/i),
  }
}

describe("The home page", () => {
  useAPI.mockImplementation(() => ([{data: "test", event: "test"}]))
  const app = render(<Index />)
  const {newsSection, calendarSection} = queryElements(app)

  it("should show the news and calendar section", () => {
    expect(newsSection()).toBeInTheDocument()
    expect(calendarSection()).toBeInTheDocument()
  })

})

