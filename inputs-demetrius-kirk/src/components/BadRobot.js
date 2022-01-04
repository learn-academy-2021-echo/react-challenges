import React, {Component} from "react";

class BadRobot extends Component {
  badTranslator = input => {
    let inputArray = input.split("");
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (i % 3 === 0) {
        result.push("B");
      } else if (i % 2 === 0 && i % 3 !== 0) {
        result.push("A");
      } else {
        result.push("L");
      }
    }
    return result.join("");
  };
  render() {
    return (
      <>
        <h2> BadRobot </h2> {this.badTranslator(this.props.userInput)}{" "}
      </>
    );
  }
}

export default BadRobot;
