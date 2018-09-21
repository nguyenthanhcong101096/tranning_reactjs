import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import Main from './settingColor/main';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'settingColor'
    }
  }

  renderView() {
    if (this.state.type == 'settingColor')
      return <Main />
  }

  change() {
    this.setState({ type: this.refs.type.value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Velcome ahihi React</h1>
          <input
            ref='type'
            type='text'
            placeholder='Nhập spring' />
          <button onClick={() => { this.change() }}>Chuyển</button>
          {this.renderView()}
        </header>
      </div>
    );
  }
}
