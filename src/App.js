import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, custom } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Hello Redux</h1>
      <h3>Counter {counter}</h3>
      <button onClick={() => dispatch(custom(-50))}>-50</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(custom(50))}>+50</button>
      <h3>Secret Information:</h3>
      {isLogged ? (
        <h3>
          Revealed!
          <span role='img' aria-label='Opened Lock'>
            🔓
          </span>
        </h3>
      ) : (
        <span role='img' aria-label='Closed Lock'>
          🔒
        </span>
      )}
    </div>
  );
}

export default App;
