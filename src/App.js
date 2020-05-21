import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, custom, login } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  return (
    <div className='App'>
      <h1 className='title'>
        Hello Redux
        <img
          className='logo'
          alt='logo'
          src='https://cdn.worldvectorlogo.com/logos/redux.svg'
        />
      </h1>
      <h3>Counter {counter}</h3>
      <button onClick={() => dispatch(custom(-50))}>-50</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(custom(50))}>+50</button>
      <h3>Secret Information:</h3>
      {isLogged && value === 'admin' ? (
        <h3 className='reveal'>
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
      <p>
        <input
          type='password'
          className='password'
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </p>
      <p>
        <button onClick={() => dispatch(login())} className='btn-login'>
          <span>{isLogged && value === 'admin' ? 'Log out' : 'Log in'}</span>
          <span role='img' aria-label='Key'>
            🔑
          </span>
        </button>
        <br />
        <del className='pass-msg'>Pass: admin</del>
      </p>
    </div>
  );
}

export default App;
