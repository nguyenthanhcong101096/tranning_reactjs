import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  onLogin(eve) {
    eve.preventDefault();
  }

  render() {
    if (this.state.username == 'admin') {
      var { location } = this.props
      return <Redirect to={{
        pathname: '/params',
        state: {
          from: location
        }
      }} />
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(eve) => { this.onLogin(eve) }}>
          <input
            onChange={(event) => { this.setState({ username: event.target.value }) }}
            placeholder="tên đăng nhập"
            type="text"
            name="username" />
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    )
  }
}
