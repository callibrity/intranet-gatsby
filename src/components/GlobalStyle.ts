import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
    font-size: 18px;
    background-color: '#ECECEC';
  }
  .btn-flat {
    background-color: purple;
    color: white;
  }
  .navbar-dark {
    background-color: #00193F;
    color: white;
  }

`;
