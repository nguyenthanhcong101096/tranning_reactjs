import React, { Component } from 'react';
import Add from './add';
import Table from './table';
import '../../styles/manager/Manager.css'

const min = 1;
const max = 100;
var rand = min + Math.random() * (max - min);

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.state = {
      addTask: false,
      listTask: [
        { id: 1, name: 'Learn Angular 4', status: true },
        { id: 2, name: 'Learn ReactJs  ', status: true },
        { id: 3, name: 'Learn PHP 4', status: false },
        { id: 4, name: 'Learn Toiec ', status: false },
        { id: 5, name: 'Learn Ruby', status: true },
      ]
    }
  }

  openNewTask() {
    this.setState(prevState => ({
      addTask: !prevState.addTask
    }))
  }


  addTask(data) {
    if (data.name == null) return

    const task = { id: rand, name: data.name, status: data.status }
    this.setState(prevState => ({
      listTask: prevState.listTask.concat(task)
    }))
  }


  deleteTask(ele) {
    var list = this.state.listTask
    var index = list.indexOf(ele)
    delete list[index]
    this.setState({ listTask: list })
  }

  editTask(data) {
    const task = { id: rand, name: data.name, status: data.status }

    var list = this.state.listTask
    list.map((ele, i) => {
      if (ele.id == data.id) {
        var index = list.indexOf(ele)
        delete list[index]
        this.setState(prevState => ({
          listTask: list.concat(task)
        }))
      }
    })
  }

  renderSearch() {
    return (
      <div >
        <button
          onClick={() => { this.openNewTask() }}
          className="btn">{this.state.addTask ? 'Close add' : 'Add Task'}
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
        <Add addTask={addTask} add={this.addTask} />
        <div className="table">
          {this.renderSearch()}
          <Table list={listTask} delete={this.deleteTask} edit={this.editTask} />
        </div>
      </div>
    );
  }
}
