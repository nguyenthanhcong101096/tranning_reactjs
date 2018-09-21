import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      context: '',
      gender: 0,
      language: 'vi',
      status: false
    }
  }

  onHandleChange(event) {
    var target = event.target
    var name = target.name
    var value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value })
  }

  onHanldeSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div style={{ backgroundColor: 'pink', height: 500, padding: 50 }}>
        <form onSubmit={(eve) => { this.onHanldeSubmit(eve) }}>
          <label>Username</label>
          <input
            name='username'
            type='text'
            onChange={(event) => { this.onHandleChange(event) }}
            style={{ marginLeft: 10 }}
            placeholder='Username' />

          <input
            name='password'
            type='text'
            onChange={(event) => { this.onHandleChange(event) }}
            style={{ marginLeft: 10 }}
            placeholder='Passowrd' />

          <textarea
            onChange={(event) => { this.onHandleChange(event) }}
            placeholder='Context'
            name='context' />

          <select
            onChange={(event) => { this.onHandleChange(event) }}
            value={this.state.gender}
            name='gender'>
            <option value={0} >Nữ</option>
            <option value={1} >Name</option>
          </select>

          <div>
            <label>
              <input
                onChange={(event) => { this.onHandleChange(event) }}
                checked={this.state.language == 'vi'}
                name='language'
                value='vi'
                type='radio' />
              vietname</label>
          </div>

          <div>
            <label>
              <input
                onChange={(event) => { this.onHandleChange(event) }}
                checked={this.state.language == 'en'}
                name='language'
                value='en'
                type='radio' />
              english</label>
          </div>

          <div>
            <label>
              <input
                onChange={(event) => { this.onHandleChange(event) }}
                name='status'
                value={true}
                type='checkbox' />
              Status</label>
          </div>

          <div style={{ marginLeft: 80 }}>
            <button type='submit' >Save</button>
            <button>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
