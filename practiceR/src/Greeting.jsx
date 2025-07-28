import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h3>Welcome to our React Course,{props.name}!  </h3>
        <p>We're excited to have you on board.</p>

      <p>{props.message}</p>
    </div>
  );
}

export default Greeting;