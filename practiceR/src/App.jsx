import  { useState, useEffect } from 'react';
import './App.css'
import React from 'react';
import Header from './Component/Header';



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>React Hooks Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;