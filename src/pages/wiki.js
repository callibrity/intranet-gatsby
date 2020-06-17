import React from "react"
import { Router } from "@reach/router"

import WikiHome from "@wiki/WikiHome"
import WikiPage from "@wiki/WikiPage"

export default function Wiki() {

  
  return (
    <Router basepath="/wiki">
      <WikiPage path="/page" />
      <WikiHome path="/" />
    </Router>
  )
}
