import React from "react"
import "@testing-library/jest-dom"
import { render, fireEvent, cleanup } from "@testing-library/react"
import {Provider} from "@components/GlobalProvider"
import Login from "@pages/login"

function queryElements(app){
  return {
    callibrityLogo: () => app.queryByAltText(/callibrity logo/i),
    navbarSearch: () => app.queryByAltText(/search bar/i),
    signInButton: () => app.queryByText(/sign in/i),
    signOutButton: () => app.queryByText(/sign out/i),
    navbarUsername: () => app.queryByText(/testName/i),
    pageLinks: () => app.queryByText(/wiki/i),
  }
}

const queryStrings = {
  callibrityLogo: /callibrity logo /i,
  navbarSearch: /search bar/i,
  signInButton: /sign in/i,
  signOutButton: /sign out/i,
  navbarUsername: /testName/i,
  pageLinks: /wiki/i,
}

function expectList(queryList){
  return {
    toBeInTheDocument: () => {
      queryList.forEach((query) => {
        expect(query).toBeInTheDocument()
      })
    },
    not: {
      toBeInTheDocument: () => {
        queryList.forEach((query) => {
          expect(query).not.toBeInTheDocument()
        })
      },
    }
  }
}

afterEach(cleanup)

test("full app rendering/navigating", () => {
  const app = render(<Provider><Login /></Provider>)
  let {
    signInButton, 
    signOutButton, 
    navbarUsername, 
    pageLinks, 
    callibrityLogo, 
    navbarSearch
  } = queryElements(app)

  expectList([signInButton(), callibrityLogo()]).toBeInTheDocument()
  expectList([signOutButton(), navbarUsername(), pageLinks(), navbarSearch()])
    .not.toBeInTheDocument()

  fireEvent.click(signInButton())
  expectList([signOutButton(), navbarUsername(), pageLinks(), navbarSearch()])
    .toBeInTheDocument()

  
  fireEvent.click(navbarUsername())
  expect(signOutButton()).toBeInTheDocument()

  fireEvent.click(signOutButton())
  expectList([signInButton(), callibrityLogo()]).toBeInTheDocument()
  expectList([signOutButton(), navbarUsername(), pageLinks(), navbarSearch()])
    .not.toBeInTheDocument()
})