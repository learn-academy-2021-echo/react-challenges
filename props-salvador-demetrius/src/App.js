import React, { Component } from 'react'
import Rolls from './components/Rolls'
import Dice from './components/Dice'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      faceOfDice: 1,
      listOfRolls: []
    }
  }

  rollDice = () => {
    //Create a function that outputs a number from 1 to 6 
    let number = Math.floor(Math.random() * 6) + 1


    let arrayOfNewList = this.state.listOfRolls
    arrayOfNewList.push(number)

    this.setState({ listOfRolls: arrayOfNewList })
    this.setState({ faceOfDice: number })
  }

  restartDice = () => {
    this.setState({ listOfRolls: [] })
    this.setState({ faceOfDice: 1 })
  }



  render() {
    return (
      <div >
        <button onClick={this.rollDice}>Roll it</button>
        <button onClick={this.restartDice}>Restart Roll</button>
        <div className="wrapper">
          <Dice dice={this.state.faceOfDice} />
          <Rolls list={this.state.listOfRolls} />
        </div>
      </div>
    )
  }
}

