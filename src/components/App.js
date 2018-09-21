import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import Main from './settingColor/main';
import Form from './form/form';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'form'
    }
  }

  renderView() {
    if (this.state.type == 'settingColor')
      return <Main />
    else if (this.state.type == 'form')
      return <Form />
  }

  change() {
    this.setState({ type: this.refs.type.value })
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Velcome ahihi React</h1>
            <input
              ref='type'
              type='text'
              placeholder='Nhập spring' />
            <button onClick={() => { this.change() }}>Chuyển</button>
          </header>
        </div>
        {this.renderView()}
      </div>
    );
  }
}
