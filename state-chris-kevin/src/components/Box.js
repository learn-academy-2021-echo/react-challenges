import React , { Component } from 'react'

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      colors: ['green', 'blue', 'yellow', 'red', 'purple', 'orange', 'brown'],
      index: 0
    }
  }

  nameColor = () => {


let updatedColorName = this.state.colors[this.state.index]

//as long as the index is less than the length of array
//then add one to the index
//changes this.state.color
//make the index random
//set up a math.random variable and set that to this.state.index
let indexCount = this.state.colors.length
let randomIndex = Math.floor(Math.random() * indexCount)

  if (this.state.index < this.state.colors.length) {
  this.setState({index: randomIndex, color: updatedColorName})
}

  // this.setState(updatedIndex)

  }
  render(){
    return (
      <>

      <button
      style={{ backgroundColor: this.state.color }}
      onClick = {this.nameColor}> {this.state.color}
      </button>


      </>
    )
    }
}
export default Box
