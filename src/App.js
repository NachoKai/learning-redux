import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className='App'>
      <h1>Hello Redux</h1>
      <h3>Counter {counter}</h3>
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
