import React, { Component } from "react";

export default class Rolls extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.pastRolls.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
