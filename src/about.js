import React from 'react';
import {
  Link
} from "react-router-dom";
import './App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        about
      </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
