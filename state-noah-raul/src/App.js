import React, { Component } from 'react'
import './App.css';



class Box extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "white"
    }
  }

 
  changeColor = () => {
    let possibleColors = ['green', 'blue', 'yellow', 'red', 'purple', 'orange']
    this.setState({color: possibleColors[Math.floor(Math.random() * possibleColors.length)]})   
  }

  render() {
    return (
      <button onClick={this.changeColor} id = "square">
        {this.state.color}
      </button>
    )
  }
}

export default Box