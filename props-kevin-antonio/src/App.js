import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import DiceRoll from './components/DiceRoll.js'
// import RollLog from './components/RollLog.js'
// As a user, I can see an application called Dice Roller
// As a developer, I can create a React application with App.js as my stateful component
// As a developer, I can create two child components that will accept props from App.js
// As a user, I can click a box and see the outcome of my current "roll"
// As a developer, I can pass a method from App.js to my dice component to display a number between 1 and 6
// As a user, I can see my roll logged
// As a developer, I can pass the value of the roll to a log component
// As a user, I can see the roll log continue to grow as I roll the dice
export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6],
      list: [],
    }
  }

  roll = () => {
     let currentRoll = Math.floor(Math.random() * this.state.numbers.length)
     this.setState({ numbers: currentRoll })
   }


  render(){
    return(
    <>
      <h1>Click to Roll Dice</h1>
      <div>
        <DiceRoll current={ this.state.numbers } />
      </div>
    </>
    )
  }
}
