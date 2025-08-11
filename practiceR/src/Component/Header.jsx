import React, { useState } from 'react';

export default function Header() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const printData = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setEmailError("Invalid email format");
      return;
    }

    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Email:", email);

    setName('');
    setEmail('');
    setEmailError('');
  };

  return (
    <>
      <h1>My Day6</h1>
      <form onSubmit={printData}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(''); 
          }}
        />
        <br />


        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
