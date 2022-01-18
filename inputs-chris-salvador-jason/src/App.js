import React, { Component } from "react";
import Badrobot from "./components/Badrobot";
import Goodrobot from "./components/Goodrobot";
import Randomrobot from "./components/Randomrobot";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <Goodrobot userInput={this.state.userInput} />
        <Badrobot userInput={this.state.userInput} />
        <Randomrobot />
      </>
    );
  }
}
