import { increment, decrement } from './CounterReducer';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>HELLO</h1>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;
