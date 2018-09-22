import React, { Component } from 'react';

export default class Add extends Component {
  constructor(props) {
    super(props)

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
              className="input"
              placeholder='Name of task'
              name='txtTask'
              type='text' />
          </div>

          <div className="AddInput">
            <h5 style={{ marginRight: 10 }}>Status</h5>
            <select className="select">
              <option>Active</option>
              <option>Hidden</option>
            </select>
          </div>

          <div>
            <button className="btn">Save</button>
            <button className="btn">Cancel</button>
          </div>
        </div>
      );
    }
    return null;
  }
}
