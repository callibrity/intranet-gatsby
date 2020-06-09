import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/react/dont-cleanup-after-each"
import { render, fireEvent } from "@testing-library/react"
import {Provider} from "@components/GlobalProvider"
import Login from "@pages/login"

function queryElements(app){
  return {
    callibrityLogo: () => app.queryByAltText(/callibrity logo/i),
    signInButton: () => app.queryByText(/sign in/i),
    signOutButton: () => app.queryByText(/sign out/i),
    navbarUsername: () => app.queryByText(/testName/i),
    pageLinks: () => app.queryByText(/wiki/i),
  }
}

describe("Login and navbar functionality", () => {
  const app = render(<Provider><Login /></Provider>)
  const {
    callibrityLogo, signInButton, signOutButton, navbarUsername, pageLinks
  } = queryElements(app)

  it("should initially show only the callibrity logo and sign in page", () => {
    expect(callibrityLogo()).toBeInTheDocument()
    expect(navbarUsername()).not.toBeInTheDocument()
    expect(pageLinks()).not.toBeInTheDocument()
  })

  it("should show username and links after signing in", () => {
    fireEvent.click(signInButton())
    expect(navbarUsername()).toBeInTheDocument()
    expect(pageLinks()).toBeInTheDocument()
  }) 

  it("should stop showing username and links after signing out", () => {
    fireEvent.click(navbarUsername())
    fireEvent.click(signOutButton())
    expect(navbarUsername()).not.toBeInTheDocument()
    expect(pageLinks()).not.toBeInTheDocument()
  })
})

