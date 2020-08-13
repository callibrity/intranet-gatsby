import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const DebugComponent = (dataobject) => {
  const formatted = JSON.stringify(dataobject, null, 4);
  
  return !formatted
    ? (<p>data has not yet been returned from the api call</p>)
    : (
      <Jumbotron>
        <h1>Data Returned</h1>
        <pre>
          {formatted}
        </pre>
      </Jumbotron>
    );
};

export default DebugComponent;
