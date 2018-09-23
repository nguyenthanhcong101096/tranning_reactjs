import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <NavLink to="/contact">Chuyển trang contact</NavLink>
      </div>
    )
  }
}
