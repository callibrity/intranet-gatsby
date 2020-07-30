import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';


export default createGlobalStyle`
  ${normalize}
  html {
    background-color: #EEECEF;
  }

  body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
    min-height: 100vh;
    position: relative;
    font-size: 20px;
    background-color: #EEECEF;
  }
  .btn-flat {
    background-color: purple;
    color: white;
  }
  a {
    border-radius: 5px;
    color: white;
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
`;
