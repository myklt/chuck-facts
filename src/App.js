import React, { Component } from 'react';
import chuck from './chuck.png';
import './App.css';
import { FactsSearch } from './features/chuckFacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={chuck} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chuck Facts</h1>
        </header>
        <FactsSearch />
      </div>
    );
  }
}

export default App;
