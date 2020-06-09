import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/react/dont-cleanup-after-each"
import { render } from "@testing-library/react"

import Index from "@pages/index"
import { queryElements } from "@testConstants"

describe("The home page", () => {
  const app = render(<Index />)
  const {newsSection, calendarSection} = queryElements(app)

  it("should show the news and calendar section", () => {
    expect(newsSection()).toBeInTheDocument()
    expect(calendarSection()).toBeInTheDocument()
  })
})

