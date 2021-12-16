import React, { Component } from "react";

class BoxButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
        newBoxArr: []
    }

  }
  // our addBox method should add a new Box to the app.js list of boxes.
  // starting with an empty array .push the value <boxes /> everytime the button is pushed
  addBox() {
    this.newBoxArr.push("<Boxes />");
  }

  render() {
    return (
      <>
       
        <button id= "button2" style = {{color: "black", background: "black", margin: 20, width: 200, height: 200}}>
        {/* set the text equal to what is stored in this.state.background */} </button>
        
      </>
    )
  }
}

export default BoxButton;
