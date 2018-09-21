import React, { Component } from 'react';

export default class Picker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ display: 'flex', margin: 20 }}>
        <h3>Color picker</h3>
        <div
          onClick={() => { this.props.change('pink') }}
          style={{ backgroundColor: 'pink', height: 50, width: 50, marginRight: 15 }}>
        </div>
        <div
          onClick={() => { this.props.change('blue') }}
          style={{ backgroundColor: 'blue', height: 50, width: 50, marginRight: 15 }}>
        </div>
        <div
          onClick={() => { this.props.change('yellow') }}
          style={{ backgroundColor: 'yellow', height: 50, width: 50, marginRight: 15 }}>
        </div>
        <div
          onClick={() => { this.props.change('black') }}
          style={{ backgroundColor: 'black', height: 50, width: 50, marginRight: 15 }}>
        </div>
      </div>
    )
  }
}
