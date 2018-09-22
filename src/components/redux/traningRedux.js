import React, { Component } from 'react';

export default class TranningRedux extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>Redux show</h3>
        <h4>user: Nhân viên mới</h4>
        <h4>company: Công ty mới</h4>
        <button>Change user</button>
        <button>Change company</button>
      </div>
    )
  }
}
