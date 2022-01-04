import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GoodRobot from "./Components/GoodRobot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }
  // See README.md for more notes
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = (e) => {
    console.log("hello there", e.target);
  };

  render() {
    let string = "the wolrd and all it's people";
    return (
      <>
        {/* <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        /> */}
        <GoodRobot value={this.state.userInput} onChange={this.handleChange} />

        <h4>{this.state.userInput}</h4>
      </>
    );
  }
}

export default App;
