import  { useState, useEffect } from 'react';
import './App.css'
import React from 'react';
import Header from './Component/Header';
import EventHandler from './Component/EventHandler';




function App() {
const [showMessage, setShowMessage] = useState(false);

 

  return (
  <>
  <h1>Event Handler</h1>
  <button onClick={() => setShowMessage(!showMessage)}>
  Toggle Message
</button>
{showMessage && <p>Hello, React Event Handling!</p>}
<EventHandler />

  </>
  );
}

export default App;