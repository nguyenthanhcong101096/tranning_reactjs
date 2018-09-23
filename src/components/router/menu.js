import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          <li><NavLink activeClassName="active" exact to="/" >Home</NavLink></li>
          <li><NavLink activeClassName="active" activeStyle={{ color: 'red' }} to="/contact">Contact</NavLink></li>
          <li><NavLink activeClassName="active" activeStyle={{ color: 'red' }} to="/params">Get Params</NavLink></li>
        </ul>
      </div>
    )
  }
}
