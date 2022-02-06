import React, { Component } from 'react'
import './App.css';
import Dice from './components/Dice';
import RollLog from './components/RollLog';
import diceone from './components/dice-one-solid.svg';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      diceNums : [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
      ],
      currentDice: 0,
      rollLog : [],
    }
  }

  diceRolls = () => {
    let nextDice = Math.floor(Math.random() * this.state.diceNums.length)
    this.setState({ currentDice: nextDice, rollLog:[...this.state.rollLog, nextDice + 1 ]}) 
       
  }


  restart = () => {
    this.setState({
      currentDice: 0,
      rollLog : []
    })
  } 

  render() {
  return (
    <div>
      <h4 style={{margin: "25px 0 0 0", fontSize:"50px"}}>Dice Roller - M & G</h4>

      <Dice dice={ this.state.diceNums[this.state.currentDice]} diceRolls={this.diceRolls} />


      <RollLog dice={this.state.rollLog } />

      <button onClick={ this.restart } className="restart-button">Restart</button>
    </div>
  );
  }
}

export default App;
