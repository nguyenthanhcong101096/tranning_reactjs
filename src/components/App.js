import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Velcome ahihi React</h1>
        </header>
      </div>
    );
  }
}
