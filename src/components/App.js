import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import Main from './settingColor/main';
import Form from './form/form';
import Manager from './manager/manager'
import TranningRedux from './redux/traningRedux'; 

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'redux'
    }
  }

  renderView() {
    const { type } = this.state

    if (type == 'settingColor')
      return <Main />
    else if (type == 'form')
      return <Form />
    else if (type == 'manager')
      return <Manager />
    else if (type == 'redux')
      return <TranningRedux />
    else
      return <Main />
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
            <h1 className="App-title">Tranning ReactJs</h1>
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
