import React, { Component } from 'react';
import Add from './add';
import Table from './table';
import '../../styles/manager/Manager.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addTask: false,
      listTask: [
        { id: 1, name: 'Learn Angular 4', status: 'Active' },
        { id: 2, name: 'Learn ReactJs  ', status: 'Active' },
        { id: 3, name: 'Learn PHP 4', status: 'Hidden' },
        { id: 4, name: 'Learn Toiec ', status: 'Hidden' },
        { id: 5, name: 'Learn Ruby', status: 'Active' },
      ]
    }
  }

  openNewTask() {
    this.setState(prevState => ({
      addTask: !prevState.addTask
    }))
  }

  renderSearch() {
    return (
      <div >
        <button
          onClick={() => { this.openNewTask() }}
          className="btn">Add Task
        </button><br />
        <div className="inputSearch">
          <input
            className="input"
            name="txtSearch"
            placeholder="search" />
          <button className="btn">Search</button>

          <select className="select">
            <option>A - Z</option>
            <option>Z - A</option>
            <option>Active</option>
            <option>Hidden</option>
          </select>
        </div>
      </div>
    )
  }

  render() {
    const { listTask, addTask } = this.state;
    return (
      <div className="manager">
        <Add addTask={addTask} />
        <div className="table">
          {this.renderSearch()}
          <Table list={listTask} />
        </div>
      </div>
    );
  }
}
