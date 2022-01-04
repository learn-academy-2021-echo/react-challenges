import React, { Component } from "react";

export default class BadRobot extends Component {
  blablabla = (string) => {
    //we need to input a string and get back a string of equal length that onlu says BlaBlaBlaBlaBla
    string.length;
  };

  render() {
    return (
      <div>
        <h3>Bad Robot</h3>
        <p>I hear you saying {this.props.yourInput}, BlaBlaBlaBlaBla?</p>
      </div>
    );
  }
}
