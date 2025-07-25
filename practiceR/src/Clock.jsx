import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every 1 second

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
