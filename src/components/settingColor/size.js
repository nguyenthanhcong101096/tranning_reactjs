import React, { Component } from 'react';

export default class Size extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        <h1 >Size</h1>
        <button onClick={() => { this.props.change('-') }}>Giảm </button>
        <button onClick={() => { this.props.change('+') }}>Tăng</button>
      </div>
    )
  }
}
