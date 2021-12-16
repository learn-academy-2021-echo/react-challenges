import React, { Component } from 'react'


class Box extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "white"
    }
  }

 
  changeColor = () => {
    let possibleColors = ['green', 'blue', 'yellow', 'red', 'purple', 'orange', 'chartreuse','rgb(18, 216, 220)', 'magenta', 'hotpink']
    this.setState({color: possibleColors[Math.floor(Math.random() * possibleColors.length)]})   
  }

  render() {
    return (
      <button style={{backgroundColor: this.state.color}} onClick={this.changeColor} id = "square">
        {this.state.color}
      </button>
    )
  }
}

export default Box
