import React from "react"
import { useState } from "react";
export default function Header(){

    // const[age, setAge] = useState(18);
    // const[name,setName]= useState("khushi");

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    return (
        <> 
        <h1>My age is {count} </h1>
<button onClick={() => setCount(prevCount => prevCount + 1)}>
  Increment
</button>        </>

    )
}
