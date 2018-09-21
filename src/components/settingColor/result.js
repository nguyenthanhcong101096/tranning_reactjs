import React, { Component } from 'react'

export default class Result extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { size, color } = this.props
    return (
      <div className="container" style={{ backgroundColor: color }}>
        <h1 className="text-setting" style={{ fontSize: size }}>Nội dung setting với font size {this.props.size}</h1>
      </div>
    )
  }
}
