import { useReducer } from 'react';

const CounterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
        return { count: state.count + 1 };
    case 'decrement':
        return { count: state.count - 1 };
    default:
        return state;
  }
}

export default function Counter(){
    const initialState = { count: 0 };
    const [state,dispatch] = useReducer(CounterReducer, initialState);
    return(
        <>
        <h1>Counter Component</h1>  
        <p>Current Count:{state.count} </p>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>

        </>
    ) 
}