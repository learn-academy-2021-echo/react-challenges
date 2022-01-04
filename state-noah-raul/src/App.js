import React, { Component } from 'react'
import './App.css';
import Buttons from './components/Buttons'



class App extends Component {
  constructor(props){
  super(props)
  this.state={
    numberOfBoxes: 0,
    array: []
  }
  }



  render() {
    return (
      <>
      <div>
          <Buttons />
      </div>
      </>
    )
  }
}
export default App