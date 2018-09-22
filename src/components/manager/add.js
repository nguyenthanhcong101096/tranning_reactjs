import React, { Component } from 'react';

export default class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: undefined,
      status: 0
    }
  }

  onHandleChange(event) {
    var target = event.target
    var name = target.name
    var value = target.value;

    this.setState({ [name]: value })
  }

  render() {
    const { addTask } = this.props
    if (addTask) {
      return (
        <div className="container">
          <h4 style={{ textAlign: 'left' }}>Add Task</h4>
          <div className="AddInput" >
            <h5 style={{ marginRight: 10 }}>Name</h5>
            <input
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
            <button onClick={() => { this.props.add(this.state) }} className="btn">Save</button>
          </div>
        </div>
      );
    }
    return null;
  }
}
