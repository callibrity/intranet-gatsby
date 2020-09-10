import React from 'react';
import styled from 'styled-components';

const ErrorPage = () => (
    <ErrorMessage>
        <h1>Something has gone awry...</h1>
        <hr></hr>
        <p>We're fixing the problem now! Check back again soon.</p>
    </ErrorMessage>
);

export default ErrorPage;

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