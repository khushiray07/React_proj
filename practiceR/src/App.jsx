import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Clock from './Clock';
import Header from './Component/Header';
import Greeting from './Greeting';


import Footer from "./Component/footer";

function App() {

  // return (
  //   <>
  //   <Header name ="khushi" age="19"/>


  //     </>
  // )
  return (
  <div>
    <h1>Hello, React!</h1>
    <Greeting name="John" message="Let's learn React together!" />
    <Footer/>
  </div>
);
}

export default App

