import React from 'react';
import styled from 'styled-components';

const NotFoundPage = () => (
  <ErrorMessage>
    <h1>404 - Not Found</h1>
    <hr></hr>
    <p>Bummer! This doesn't seem to exist right now :(</p>
  </ErrorMessage>
);

export default NotFoundPage;

const ErrorMessage = styled.div`
    display: block;
    padding: 100px;
    color: #000;
    text-align: center;

    h1 {
        font-size: 64px;
    }

    hr {
        margin: auto;
        width 40%;
        border-color: #9e9e9e;
    }

    p {
        font-size: 24px;
    }
`;