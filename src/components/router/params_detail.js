import React, { Component } from 'react';

export default class ParamsDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var { match } = this.props
    return (
      <div style={{ display: 'flex' }}>
        <h5 style={{ marginRight: 20 }}>Id</h5>
        <h5 style={{ marginRight: 20 }}>User</h5>
        <h5 style={{ marginRight: 20 }}>Name</h5>
      </div>
    )
  }
}
