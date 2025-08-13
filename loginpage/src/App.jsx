import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { css } from '@emotion/react';

const appStyles = css`
  text-align: center;
  margin-top: 2rem;
`;

function App() {
  return (
    <div>
      <h1>Welcome to Our Interactive Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default App;

      

