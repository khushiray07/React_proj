import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import useFetch from './useFetch';

function App() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  return (
    <div className="App">
      <h1>State Management Demo</h1>
      <Counter />
      {loading ? <p>Loading...</p> : <p>Title: {data.title}</p>}
    </div>
  );
}

export default App
