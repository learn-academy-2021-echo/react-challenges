import React, { Component } from "react";


class Robot2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: "",
      };
    }
    render() {
      return (
        <>
          <h2>Robot 2</h2>
          <img
            id="Robot"
            img src="https://pngimg.com/uploads/robot/robot_PNG102.png"
            style={{
                margin: 120,
                height: 150,
                width: 135,
              }}>
          </img>
        </>
      );
    }
  }
  export default Robot2;