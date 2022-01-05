import React, { Component } from "react";

export default class Badrobot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  blahFunction = (string) => {
    // set variable with "bla"
    let emptyArr = [];
    let wordArr = string.split("");
    let trackerBla = 0;
    let blah = ["b", "l", "a"];
    for (let i = 0; i < wordArr.length; i++) {
      if (trackerBla < 3) {
        emptyArr.push(blah[trackerBla]);
        trackerBla = trackerBla + 1;
        console.log(trackerBla);
      } else {
        trackerBla = 0;
        emptyArr.push(blah[trackerBla]);
        trackerBla = trackerBla + 1;
        console.log(trackerBla);
      }
    }
    return emptyArr.join("");
  };

  render() {
    return (
      <div>
        <h1>this is Badrobot</h1>
        <h2>{this.blahFunction(this.props.userInput)}</h2>
      </div>
    );
  }
}
