import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home';
import Contact from './contact';

export default class TrainningRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}
