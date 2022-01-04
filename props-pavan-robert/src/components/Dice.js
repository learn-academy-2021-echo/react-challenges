import React, { Component } from "react";

class Dice extends Component {


  render() {
    return(
      <button class = "RollDice" onClick = { this.props.roll }>{this.props.numb}</button>
    )
  }
}

export default Dice;
