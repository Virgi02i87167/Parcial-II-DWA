import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const handleClickEvent = (event) => {
  console.log("Button clicked!");
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

function WelcomeMessage({ myprop }) {
  return <p>{myprop}!</p>;
}

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <WelcomeMessage myprop={'somevalue'} />
        <Counter />
        <CounterWithNameAndSideEffect />
        <button onClick={handleClickEvent}>Click here</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
