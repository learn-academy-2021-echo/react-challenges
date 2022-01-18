import React, { Component } from "react";

export default class Dice extends Component {
  render() {
    return (
      <>
        <h1>{this.props.displayRoll}</h1>
        <button onClick={this.props.currentRoll}>do stuff</button>
      </>
    );
  }
}
