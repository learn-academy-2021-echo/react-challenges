import React, {Component} from "react";
import "./App.css";
import BadRobot from "./components/BadRobot";
import GoodRobot from "./components/GoodRobot";
import KanyeBot from "./components/KanyeBot";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
  }
  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <GoodRobot userInput={this.state.userInput} />{" "}
        <BadRobot userInput={this.state.userInput} />{" "}
        <KanyeBot userInput={this.state.userInput} />{" "}
      </>
    );
  }
}
