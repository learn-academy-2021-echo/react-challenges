import React, { Component } from 'react'
import './App.css';
import Box from './components/Box'




class App extends Component {
  constructor(props){
  super(props)
  this.state={
    numberOfBoxes: 0,
    array: []
  }// box [1,2,3,4]
  }

  addOne=()=>{
    this.setState({numberOfBoxes: this.state.numberOfBoxes + 1})
    this.state.array.push(this.state.numberOfBoxes)
  }


  render() {
    return (
      <div>
        <button onClick={this.addOne}>Press Here For More Boxes</button>

        <h1>{this.state.array.map(value=><h1><Box /></h1>)}</h1>
       
       


      </div>
    )
  }
}
export default App