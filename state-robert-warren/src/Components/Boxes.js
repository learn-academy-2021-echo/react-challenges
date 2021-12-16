import React, { Component } from 'react';

class Boxes extends Component {
    constructor(props){
      super(props)
      this.state = {
        color: "white",
        background: "black",
        buttonColor: "white",
        font: "black"
  
      }
  
    }

    changeColor = () => {
      //on click for button1 needs to change color of button
      //need this.setState to change both color and color text
    //   this.setState({background: "white"})
    let colors = ["black", "blue", "green", "red"]
    //turns the screen green --> this.setState({background: colors[3]})
    //start a function that sets the state of background color to a random number between 1 and (the number of colors)
    // this.setState({buttonColor: this.state.background})
    const boxColor = this.setState({background: colors[Math.floor(Math.random()*5)]})
    }
        

    render(){
      return(
      <>
      <h1>We are the best</h1>
      <button id = "button1" onClick={this.changeColor} style = {{color: this.state.color, background: this.state.background, width: 200, height: 200}}>
{/* set the text equal to what is stored in this.state.background */}
          {this.state.background}
      </button>
      </>
      )}
  }
  export default Boxes