import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: undefined,
      name: undefined,
      status: 1,
      edit: false
    }
  }

  renderRow() {
    var arr = []

    this.props.list.map((ele, index) => {
      arr.push(
        <tr key={index}>
          <td>{ele.id}</td>
          <td>{ele.name}</td>
          <td>{ele.status ? 'Active' : 'Hidden'}</td>
          <td>
            <button
              onClick={() => { this.openEdit(ele) }}
              style={{ backgroundColor: 'blue' }}
              className="btn" >Edit
            </button>
            <button
              onClick={() => { this.props.delete(ele) }}
              style={{ backgroundColor: 'red' }}
              className="btn">Delete
              </button>
          </td>
        </tr>
      )
    })

    return arr;
  }

  onHandleChange(event) {
    var target = event.target
    var name = target.name
    var value = target.value;

    this.setState({ [name]: value })
  }


  openEdit(ele) {
    this.setState(prevState => ({
      id: ele.id,
      edit: true,
      name: ele.name,
      status: ele.status ? 1 : 0,
    }))
  }

  renderEdit() {
    const data = { id: this.state.id, name: this.state.name, status: this.state.status ? 1 : 0 }
    if (this.state.edit) {
      return (
        <div>
          <h5>Edit stask</h5>
          <div className="AddInput" >
            <h5 style={{ marginRight: 10 }}>Name</h5>
            <input
              value={this.state.name}
              onChange={(event) => { this.onHandleChange(event) }}
              className="input"
              placeholder='Name of task'
              name='name'
              type='text' />
          </div>

          <div className="AddInput">
            <h5 style={{ marginRight: 10 }}>Status</h5>
            <select
              name='status'
              value={this.state.status}
              onChange={(event) => { this.onHandleChange(event) }}
              className="select">
              <option
                value={1}>Active</option>
              <option
                value={0}>Hidden</option>
            </select>
          </div>

          <div>
            <button onClick={() => { this.props.edit(data), this.setState({ edit: false }) }} className="btn">Approve</button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h3>Management of table</h3>
        <table>
          <tr>
            <th>Code</th>
            <th>Name of task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {this.renderRow()}
        </table>
        {this.renderEdit()}
      </div>
    )
  }
}
