import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro'

function App() {

  // Declare a new state variable, which we'll call "series" // Hooks
  const [series, setSeries] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series List</h1>
      </header>
      <Intro message="Here you can find your favorite series"/>

    The length of the series is { series.length }
    </div>
  );
}

export default App;
