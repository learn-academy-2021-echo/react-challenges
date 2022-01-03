import React, { Component } from "react";

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceRollNum: 0,
    };
  }
  diceRoll = () => {
    this.setState({ diceRollNum: Math.floor(Math.random() * 6) });
  };

  render() {
    return(
      <button>bla bla</button>
      {this.state.diceRollNum}
    )

  }
}
export default Dice;
