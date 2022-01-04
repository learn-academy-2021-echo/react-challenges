import React, { Component } from "react";
import Dice from "./components/Dice";
import Rolls from "./components/Rolls";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRollNum: '',
      rollList: []
    };
  }

  diceRoll = () => {
    this.setState({diceRollNum: (Math.floor(Math.random() * 6) + 1)})
    //this.setState({ myArray: [...this.state.myArray, 'new value'] })
    this.setState({rollList: [...this.state.rollList, this.state.diceRollNum]})
  };

  render() {
    return (
      <>
        <div class="Dice">
          <Dice numb={ this.state.diceRollNum }
          roll = { this.diceRoll }/>
        </div>
        <div class="Roll">
          <Rolls numList = { this.state.rollList }/>
        </div>
      </>
    )
  }
}

export default App;
