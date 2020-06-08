import React, { useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
import "typeface-roboto"
  
import { UserContext } from "../globals/UserContext" 
import theme from "../globals/theme" 

const GlobalStyle = createGlobalStyle`
 ${normalize}

 html {
  background-color: #EEECEF;
 }

 body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  position: relative;
  font-size: 20px;
  background-color: #EEECEF;
 }

 a {
   border-radius: 5px;
   color: inherit;
   text-decoration: none;
   padding: 5px;
   cursor: pointer;
 }

 h1 {
   font-size: inherit;
   margin: 0;
   font-weight: inherit;
 }

 h2 {
   font-size: inherit;
   font-weight: inherit;
   margin: 0;
 }

 p {
   margin: 0;
 }

 svg {
  margin: 0 3px;
 }

 ul {
   list-style-type: none;
   padding: 0;
   margin: 0;
 }
`
  
const GlobalProvider = ({children}) => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default GlobalProvider