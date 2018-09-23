import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes';
import Menu from './menu';

export default class TrainningRouter extends Component {
  constructor(props) {
    super(props)
  }

  ShowContentMenu = (routes) => {
    var result = []
    if (routes.length > 0) {
      routes.map((route) => {
        result.push(<Route path={route.path} component={route.main} exact={route.exact} />)
      })
    }
    return result
  }

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            {this.ShowContentMenu(routes)}
          </Switch>
        </div>
      </Router>
    )
  }
}
