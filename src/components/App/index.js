import React from 'react';
/*import logo from '../../logo.svg';*/
import './App.css';
import Intro from '../Intro';
import Series from '../Series';


function App() {

    return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series List - ReactJS</h1>
      </header>
        <br/>
      <Intro message="Here you can find your favorite series"/>
        <Series />
    </div>
  );
}

export default App;
