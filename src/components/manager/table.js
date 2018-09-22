import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props)
  }

  renderRow() {
    const { list } = this.props
    var arr = []
    list.map((ele, index) => {
      arr.push(
        <tr key={index}>
          <td>{ele.id}</td>
          <td>{ele.name}</td>
          <td>{ele.status}</td>
          <td>
            <button
            style = {{backgroundColor: 'blue'}}
              className="btn" >Edit
            </button>
            <button
              style = {{backgroundColor: 'red'}}
              className="btn">Delete
              </button>
          </td>
        </tr>
      )
    })

    return arr;
  }

  render() {
    return (
      <div>
        <h3>Management of table</h3>
        <table>
          <tr>
            <th>STT</th>
            <th>Name of task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {this.renderRow()}
        </table>
      </div>
    )
  }
}
