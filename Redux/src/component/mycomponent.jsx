// MyComponent.js
import React from 'react';
//import reactLogo from './assets/react.svg';
import DisplayCount from './displaycount';

function MyComponent({ count, setCount }) {
  var a = 2;
  var b = 3;
  var x = a + b ;
  return (
    <>
    <div>
      <div>
        {/* <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{x}</p>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(count - 1)}>Minus 1</button>
        <p>count is {count}</p>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
    </>
  );
}

export default MyComponent;
