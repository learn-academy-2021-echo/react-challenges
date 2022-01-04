import React, { Component } from "react";

class GoodRobot extends Component {
  render() {
    return (
      <>
        {/* <h1>Say Something</h1> */}
        <input type="text" onChange={this.props.onChange} />
        <h2>Good Robot</h2>
      </>
    );
  }
}

export default GoodRobot;
