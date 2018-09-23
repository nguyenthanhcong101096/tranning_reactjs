import React, { Component } from 'react';
import { Prompt } from 'react-router-dom'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <button>Access</button>
        <button>Deny</button>
        <Prompt
          when={true}
          message={ location => 'bạn chắc chắn muôn đi'}
        />
      </div>
    )
  }
}
