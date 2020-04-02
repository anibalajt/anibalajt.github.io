import React from 'react';
import {
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/anibalajt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andres Jarava
        </a>
      </header>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
