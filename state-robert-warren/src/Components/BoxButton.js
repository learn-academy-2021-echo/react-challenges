import React, { Component } from "react";
import Boxes from './Boxes';

class BoxButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
        newBoxArr: []
    }

  }
  // our addBox method should add a new Box to the app.js list of boxes.
  // starting with an empty array .push the value <boxes /> everytime the button is pushed
  addBox = () => {
    this.setState({newBoxArr: this.state.newBoxArr.concat(<Boxes />)});
    console.log(this.state.newBoxArr)
  }
  remBox = () => {
    let index = this.state.newBoxArr.length
    this.setState({newBoxArr: this.state.newBoxArr.splice(1, index)});

  }


  render() {
    return (
      <>
        <button id= "addBox" onClick = {this.addBox} style = {{color: "white", background: "black", margin: 20, width: 200, height: 200}}>
          push this for more Boxes
        </button>
        <button id= "remBox" onClick = {this.remBox} style = {{color: "white", background: "black", margin: 20, width: 200, height: 200}}>
          push this for less Boxes
        </button>
          {this.state.newBoxArr}
      </>
    )
  }
}

export default BoxButton;
