import React, { Component } from "react";
import Dice from "./components/Dice";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRollNum: []
    };
  }

  diceRoll = () => {
    this.setState({ diceRollNum: (Math.floor(Math.random()) * 6) });
  };

  render() {
    return (
      <>
        <div class="Dice">
          <Dice numb={ this.state.diceRollNum }
          roll = { this.diceRoll }/>
        </div>
        <div class="Roll"></div>
      </>
    )
  }
}

export default App;
