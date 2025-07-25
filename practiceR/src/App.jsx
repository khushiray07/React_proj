import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Clock from './Clock';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
    <p style={{color:"red"}}>This is my first react</p>
    <p>This is a JSX example.</p>
      <Clock /> 

      </>
  )
}

export default App

