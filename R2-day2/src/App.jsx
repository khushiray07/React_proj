import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './UserContext';
import UserProfile from './UserProfile';
import UserDashboard from './UserDashboard';

function App() {

  const user={name:"Khushi", email:"khush@gmail.com"}
  return (
    <>
    <h1>Context API Demo</h1>
    <UserContext.Provider value={user}>
      <UserDashboard />
    </UserContext.Provider>
    </>
  )
}

export default App



