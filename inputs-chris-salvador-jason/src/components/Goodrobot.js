import React, { Component } from "react";

export default class Goodrobot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>I'm the good ROBOT</h1>
        <h2>{this.props.userInput}</h2>
      </div>
    );
  }
}
