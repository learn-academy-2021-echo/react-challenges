import React, { Component } from 'react'
import Box from './Box'




class Buttons extends Component {
  constructor(props){
  super(props)
  this.state={
    numberOfBoxes: 0,
    array: []
  }
  }

  addOne=()=>{
    this.setState({numberOfBoxes: this.state.numberOfBoxes + 1})
    this.state.array.push(this.state.numberOfBoxes)
  }

  removeOne=()=>{
    this.setState({numberOfBoxes: this.state.numberOfBoxes - 1})
    this.state.array.pop(this.state.numberOfBoxes)
  }

  reset=()=>{
      this.setState({numberOfBoxes: 0})
      this.state.array = []
  }


  render() {
    return (
      <div>
        <div id="buttons">
          <button onClick={this.addOne} id="addOne">Press Here For More Boxes</button>
          
          <button onClick={this.removeOne} id="removeOne">Press Here For Less Boxes</button>

          <button onClick={this.reset} id="reset">Press Here To Clear All Boxes</button>
        </div>
        <h1 id="boxes">{this.state.array.map(value=><h1><Box /></h1>)}</h1>
      </div>
    )
  }
}
export default Buttons