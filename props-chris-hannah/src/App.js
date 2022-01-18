import React, { Component } from "react";
import Dice from "./components/Dice";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outcome: 0,
      lastRoll: [],
    };
  }

  // create a method that passes to Dice component to display a number between 1 and 6
  throwDice = () => {
    let newThrow = Math.floor(Math.random() * 6 + 1);
    this.setState({
      outcome: newThrow,
      lastRoll: [...this.state.lastRoll, newThrow],
    });
  };

  render() {
    return (
      <>
        <div>
          <Dice displayRoll={this.state.outcome} currentRoll={this.throwDice} />
          <ul>
            {this.state.lastRoll.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}
