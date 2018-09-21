import React, { Component } from 'react';
import Result from './result';
import Picker from './picker';
import Size from './size';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.changeColor = this.changeColor.bind(this)
    this.changeSize = this.changeSize.bind(this)
    this.state = {
      size: 15,
      color: 'pink'
    }
  }

  changeColor(color) {
    this.setState({ color })
  }

  changeSize(type) {
    if (type == '-') {
      this.setState(prevState => ({
        size: prevState.size - 1
      }))
    } else {
      this.setState(prevState => ({
        size: prevState.size + 1
      }))
    }
  }

  resetState() {
    this.setState({
      color: 'pink',
      size: 15
    })
  }

  render() {
    const { size, color } = this.state
    return (
      <div className="App">
        <Picker change={this.changeColor} />
        <Result size={size} color={color} />
        <Size change={this.changeSize} />
        <button onClick={() => { this.resetState() }}>reset</button>
      </div>
    );
  }
}
