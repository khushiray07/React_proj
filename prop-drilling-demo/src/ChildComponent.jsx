import React from 'react';
import GrandchildComponent from './GrandchildComponent';

function ChildComponent({ data }) {
  return (
    <div>
      <p>Data from Child: {data}</p>
      <GrandchildComponent data={data} />
    </div>
  );
}

export default ChildComponent;
